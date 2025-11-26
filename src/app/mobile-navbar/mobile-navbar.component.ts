import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent {
  @Output() menuOpenChange = new EventEmitter<boolean>();
  isMenuOpen = false;
  currentLang: 'de' | 'en' = 'en';

  constructor(private router: Router, private translate: TranslateService) {
    if (!this.translate.currentLang) this.translate.use(this.currentLang);
  }

  /** Toggles the mobile menu state */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuOpenChange.emit(this.isMenuOpen);
  }

  /** Handles keyboard activation for the burger menu */
  onBurgerKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }

  /** Switches application language */
  switchLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  /** Navigates to a section and closes the menu */
  async goAndClose(
    event: Event,
    section: 'why' | 'skills' | 'projects' | 'contact' | 'why-me'
  ) {
    event.preventDefault();
    this.isMenuOpen = false;
    this.menuOpenChange.emit(false);

    await this.router.navigate(['/'], { fragment: section });

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }
}
