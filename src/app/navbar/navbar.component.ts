import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  active = '';
  currentLang: 'de' | 'en' = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use('en');
  }

  /**
   * Sets the currently active navigation item.
   * @param id Section identifier to activate.
   */
  setActive(id: string) {
    this.active = id;
  }

  /**
   * Switches the application language.
   * @param lang Target language code ('de' or 'en').
   */
  switchLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
