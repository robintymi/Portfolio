import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Central language preference handler that keeps ngx-translate and UI state in sync.
 * Persists the user's choice so routed pages share the same language.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'preferredLang';
  private currentLangSubject = new BehaviorSubject<'de' | 'en'>(
    this.resolveInitialLang()
  );

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(({ lang }) => {
      const normalized = this.normalizeLang(lang) ?? 'en';
      this.currentLangSubject.next(normalized);
      localStorage.setItem(this.storageKey, normalized);
    });
  }

  /** Currently active language. */
  get currentLang(): 'de' | 'en' {
    return this.currentLangSubject.value;
  }

  /** Stream of language changes. */
  langChanges(): Observable<'de' | 'en'> {
    return this.currentLangSubject.asObservable();
  }

  /** Updates the language across the app and stores the preference. */
  setLanguage(lang: 'de' | 'en') {
    if (lang === this.currentLangSubject.value) return;

    this.currentLangSubject.next(lang);
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
  }

  private resolveInitialLang(): 'de' | 'en' {
    const stored = this.normalizeLang(localStorage.getItem(this.storageKey));
    const initial =
      stored ??
      this.normalizeLang(this.translate.currentLang) ??
      this.normalizeLang(this.translate.getDefaultLang()) ??
      'en';

    this.translate.use(initial);
    return initial;
  }

  private normalizeLang(value: string | null | undefined): 'de' | 'en' | null {
    if (value === 'de' || value === 'en') return value;
    return null;
  }
}