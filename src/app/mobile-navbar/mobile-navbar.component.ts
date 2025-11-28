import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';
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

  constructor(
    private router: Router,
    private translate: TranslateService,
    private scrollService: ScrollService
  ) {
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
    section: 'why-me' | 'skills' | 'projects' | 'contact'
  ) {
    event.preventDefault();
    this.isMenuOpen = false;
    this.menuOpenChange.emit(false);

    await this.router.navigate(['/'], { fragment: section });
    const target = section === 'why' ? 'why-me' : section;

    setTimeout(() => {
      this.scrollService.scrollToSection(target);
    }, 0);
  }
}
