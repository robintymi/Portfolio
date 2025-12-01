import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private readonly headerOffset = 120;
    private adjustTimeoutId?: number;

    scrollToSection(sectionId: string) {
        const el = document.getElementById(sectionId);
        if (!el) return;

        // Respektiere „Reduce motion“
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const targetY = Math.max(
            el.getBoundingClientRect().top + window.scrollY - this.headerOffset,
            0
        );


        window.scrollTo({
            top: targetY,
            behavior: reduceMotion ? 'auto' : 'smooth',
        });
    }
}
