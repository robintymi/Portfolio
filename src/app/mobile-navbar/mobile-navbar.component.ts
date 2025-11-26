import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe], // KEIN Router hier
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent {
  @Output() menuOpenChange = new EventEmitter<boolean>();

  isMenuOpen = false;
  currentLang: 'de' | 'en' = 'en';

  constructor(private router: Router, private translate: TranslateService) {
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

  async goAndClose(event: Event, section: 'why' | 'skills' | 'projects' | 'contact' | 'why-me') {
    event.preventDefault(); // keine Default-Anchor-Action
    this.isMenuOpen = false;
    this.menuOpenChange.emit(false);

    await this.router.navigate(['/'], { fragment: section });

    // Fallback: sicher nach Render scollen (falls anchorScrolling zu früh feuert)
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Notfalls ganz nach oben
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  }
}
