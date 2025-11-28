import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';
import { LanguageService } from '../shared/language.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit, OnDestroy {
  @Output() menuOpenChange = new EventEmitter<boolean>();
  isMenuOpen = false;
  currentLang: 'de' | 'en' = 'en';
  private destroy$ = new Subject<void>()
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
      .subscribe((lang) => (this.currentLang = lang));
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
    this.languageService.setLanguage(lang);
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


    setTimeout(() => {
      this.scrollService.scrollToSection(section);
    }, 0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
