import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {

  active = 'why-me'; // initial

  setActive(id: string) {
    this.active = id;
  }

  currentLang: 'de' | 'en' = 'en';

  switchLang(lang: 'de' | 'en') {
    this.currentLang = lang;
  }

}
