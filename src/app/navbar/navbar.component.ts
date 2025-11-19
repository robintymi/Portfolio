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
  active = 'why-me';
  currentLang: 'de' | 'en' = 'en'; // <--- UI-Standard: EN

  constructor(private translate: TranslateService) {
    // i18n-Standard beim Start: EN
    this.translate.use('en');
  }

  setActive(id: string) {
    this.active = id;
  }

  switchLang(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
