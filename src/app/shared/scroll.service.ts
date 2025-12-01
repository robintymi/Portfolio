import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private readonly headerOffset = 120;
    private animationFrameId?: number;

    scrollToSection(sectionId: string) {
        const el = document.getElementById(sectionId);
        if (!el) return;

        // Respektiere „Reduce motion“
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const targetY = Math.max(
            el.getBoundingClientRect().top + window.scrollY - this.headerOffset,
            0
        );

        if (reduceMotion) {
            window.scrollTo({
                top: targetY,
                behavior: 'auto',
            });
            return;
        }

        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = Math.min(1000, Math.max(400, Math.abs(distance) * 0.5));
        const startTime = performance.now();

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const currentY = startY + distance * eased;

            window.scrollTo({ top: currentY, behavior: 'auto' });

            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.animationFrameId = undefined;
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }
}
