import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { CommonModule } from '@angular/common';
import { ResumerComponent } from "../resumer/resumer.component";
import { ContactComponent } from "../contact/contact.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { BlogComponent } from "../blog/blog.component";
import { Tab } from '../../Interfaces/Tab';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AboutComponent, ResumerComponent, ContactComponent, PortfolioComponent, BlogComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  tabs: Tab[] = [
    { id: 'about', name: 'About' },
    { id: 'resume', name: 'Resume' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'blog', name: 'Blog' },
    { id: 'contact', name: 'Contact' }
  ];

  activeTab = 'about';

  get activeTabTitle(): string {
    return this.tabs.find(tab => tab.id === this.activeTab)?.name || '';
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  /* getIconForTab(tabId: string): string {
    const iconMap: { [key: string]: string } = {
      about: 'person',
      resume: 'description',
      portfolio: 'work',
      blog: 'article',
      contact: 'mail'
    };
    return iconMap[tabId] || 'circle';
  } */
}
