import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ResumerComponent } from '../resumer/resumer.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { Tab } from '../../Interfaces/Tab';
import { TranslocoService } from '@jsverse/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ResumerComponent,
    ContactComponent,
    PortfolioComponent,
    BlogComponent,
    LanguageSelectorComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  tabs: Tab[] = [
   
  ];
  activeTab: string = 'about';
  private destroy$ = new Subject<void>();

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.translocoService.selectTranslateObject('navigation')
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: translations => {
        console.log('Loaded translations object:', translations);
        this.tabs = [
          { id: 'about', name: translations['about'] },
          { id: 'resume', name: translations['resume'] },
          { id: 'portfolio', name: translations['portfolio'] },
          { id: 'blog', name: translations['blog'] },
          { id: 'contact', name: translations['contact'] }
        ];
      },
      error: err => {
        console.error('Error loading translations:', err);
      }
    });
  }
  

  getActiveTabTitle(): string {
    return this.tabs.find(tab => tab.id === this.activeTab)?.name || '';
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  trackById(index: number, tab: Tab): string {
    return tab.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
