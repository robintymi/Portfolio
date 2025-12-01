import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private readonly headerOffset = 120;   // Fixe Headerhöhe
    private readonly overshoot = 42;       // Wie weit unter das Ziel
    private readonly tOvershoot = 420;     // ms: Dauer bis zum Overshoot
    private readonly tDwell = 140;         // ms: kurzes Verharren am Overshoot
    private readonly tSettle = 260;        // ms: Dauer zurück zum Ziel

    scrollToSection(sectionId: string) {
        const el = document.getElementById(sectionId);
        if (!el) return;

        // Respektiere „Reduce motion“
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const overshoot = reduceMotion ? 0 : this.overshoot;

        const startY = window.scrollY;
        const targetY = Math.max(
            el.getBoundingClientRect().top + window.scrollY - this.headerOffset,
            0
        );
        const overshootY = targetY + overshoot;

        // Zeitleiste (gesamt)
        const T1 = this.tOvershoot;
        const T2 = T1 + this.tDwell;
        const T3 = T2 + this.tSettle;

        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const t0 = performance.now();

        const step = (now: number) => {
            const t = now - t0;

            let y: number;
            if (t <= T1) {
                // Phase 1: sanft von Start zum Overshoot
                const p = easeInOutCubic(t / T1);
                y = lerp(startY, overshootY, p);
            } else if (t <= T2) {
                // Phase 2: Verharren am Overshoot (keine Bewegung)
                y = overshootY;
            } else if (t <= T3) {
                // Phase 3: sanft vom Overshoot zum Ziel
                const p = easeInOutCubic((t - T2) / (T3 - T2));
                y = lerp(overshootY, targetY, p);
            } else {
                // Ende
                window.scrollTo(0, targetY);
                return;
            }

            window.scrollTo(0, y);
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }
}
