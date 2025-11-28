import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core'; import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';
import { LanguageService } from '../shared/language.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe,],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  active = '';
  currentLang: 'de' | 'en' = 'en';
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.languageService.currentLang;
    this.languageService
      .langChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((lang) => (this.currentLang = lang));
  }

  /**
 * Navigates to the requested section on the home page.
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

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }
  /**
   * Scrolls to the requested section with a playful bounce and marks it active.
   * @param event Click event to prevent default anchor jumping.
   * @param id Section id to scroll to.
   */
  scrollToSection(event: Event, id: string) {
    event.preventDefault();
    this.setActive(id);
    this.scrollService.scrollToSection(id);
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
