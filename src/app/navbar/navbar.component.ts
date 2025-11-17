import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// <-- WICHTIG: google HIER draußen deklarieren, nicht in der Klasse
declare var google: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  active = 'why-me'; // initial
  currentLang: 'de' | 'en' = 'en';

  setActive(id: string) {
    this.active = id;
  }

  // Methode der Klasse
  switchLang(lang: 'en' | 'de') {
    const langSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

    if (langSelect) {
      langSelect.value = lang;
      langSelect.dispatchEvent(new Event('change')); // Google Translate auslösen
      this.currentLang = lang;
    } else {
      console.warn('Google Translate dropdown ( .goog-te-combo ) wurde nicht gefunden.');
    }
  }

  // optional: nur um zu prüfen, ob Google das Select gebaut hat
  ngAfterViewInit(): void {
    // kleine Verzögerung, bis Google sein Dropdown rendert
    setTimeout(() => {
      const langSelect = document.querySelector('.goog-te-combo');
      console.log('Google Translate Select gefunden:', !!langSelect);
    }, 1500);
  }
}
