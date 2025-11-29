import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../shared/scroll.service';
import { LanguageService } from '../shared/language.service';
import { Subject, takeUntil } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule,],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  active = '';
  currentLang: 'de' | 'en' = 'en';
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.languageService.currentLang;
    this.languageService
      .langChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((lang: 'de' | 'en') => (this.currentLang = lang));
  }

  /**
   * Navigates to the requested section on the home page and scrolls there smoothly.
   * Ensures navigation also works from routed pages like legal notice.
   * @param event click event to prevent default anchor behavior
   * @param section target fragment id
   */
  async navigateTo(
    event: Event,
    section: 'why-me' | 'skills' | 'projects' | 'contact'
  ) {
    event.preventDefault();
    this.setActive(section);

    await this.router.navigate(['/'], { fragment: section });
    setTimeout(() => this.scrollService.scrollToSection(section), 0);
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
    this.languageService.setLanguage(lang);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
