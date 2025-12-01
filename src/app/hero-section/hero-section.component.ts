import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, MobileNavbarComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  hideHeroVisuals = false;

  /**
   * Toggles the visibility of the hero image based on mobile menu state.
   * @param open Whether the mobile menu is currently open.
   */
  onMenuOpenChange(open: boolean) {
    this.hideHeroVisuals = open;
  }
}
