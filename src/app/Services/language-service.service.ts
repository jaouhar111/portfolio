import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader, TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService  {

  private http = inject(HttpClient);
  private translocoService = inject(TranslocoService)
  

  setLanguage(lang: any) {
    if (this.translocoService.getAvailableLangs().includes(lang)) {
      this.translocoService.setActiveLang(lang);
      // Optionally store language preference in localStorage
      localStorage.setItem('app_language', lang);
    } else {
      console.warn(`Language ${lang} is not supported`);
    }
  }

  getCurrentLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  // Initialize language from localStorage or browser settings
  initializeLanguage() {
    const savedLang = localStorage.getItem('app_language');
    const browserLang = this.translocoService.getDefaultLang();
    
    if (savedLang) {
      this.setLanguage(savedLang);
    } else {
      this.setLanguage(browserLang);
    }
  }
}
