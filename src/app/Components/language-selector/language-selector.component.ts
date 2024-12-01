import { Component } from '@angular/core';
import { LanguageServiceService } from '../../Services/language-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLanguage: string = 'en';
  dropdownOpen = false;
  languages = ['en', 'es', 'fr'];

  constructor(private languageService: LanguageServiceService) {}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onLanguageChange(lang: string) {
    this.currentLanguage = lang;
    this.languageService.setLanguage(lang);
    this.dropdownOpen = false; // Close dropdown after selection
  }

  getFlag(language: string): string {
    const flagMap: { [key: string]: string } = {
      en: 'https://flagsapi.com/US/flat/64.png',
      es: 'https://flagsapi.com/ES/flat/64.png',
      fr: 'https://flagsapi.com/FR/flat/64.png',
    };
    return flagMap[language] || 'https://flagsapi.com/default/flat/64.png';
  }

  getLanguageName(language: string): string {
    const languageMap: { [key: string]: string } = {
      en: 'English',
      es: 'Español',
      fr: 'Français',
    };
    return languageMap[language];
  }
}
