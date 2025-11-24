import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    // Falls App noch keine Sprache gesetzt hat:
    if (!this.translate.currentLang) {
      this.translate.use(this.currentLang);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuOpenChange.emit(this.isMenuOpen);
  }

  onBurgerKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }

  switchLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  closeAfterNav() {
    this.isMenuOpen = false;
    this.menuOpenChange.emit(false);
  }
}
