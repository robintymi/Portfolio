import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private readonly headerOffset = 120;
    private readonly bounceOffset = 28;
    private readonly settleDelay = 170;
    private readonly bounceDelay = 420;

    /**
     * Smoothly scrolls to a section and adds a subtle upward bounce once it settles.
     * @param sectionId Element id to scroll to.
     */
    scrollToSection(sectionId: string) {
        const targetElement = document.getElementById(sectionId);
        if (!targetElement) return;

        const targetPosition = Math.max(
            targetElement.getBoundingClientRect().top + window.scrollY - this.headerOffset,
            0
        );
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        window.setTimeout(() => {
            const bounceTarget = Math.max(targetPosition - this.bounceOffset, 0);
            window.scrollTo({ top: bounceTarget, behavior: 'smooth' });

            window.setTimeout(() => {
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }, this.settleDelay);
        }, this.bounceDelay);
    }
}