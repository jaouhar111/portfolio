import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../Interfaces/Project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: Project[] = [
    { id: 1, title: 'Drive Choice', category: 'E-commerce Websites', image: '/assets/images/IMG_4650.JPG' },
    { id: 2, title: 'Entertainment Websites App', category: 'Web Applications', image: '/assets/images/project-1.jpg' },
    { id: 3, title: 'Social Media', category: 'Entertainment Websites', image: '/assets/images/project-2.png' },
    { id: 4, title: 'Online Store', category: 'E-commerce Websites', image: '/assets/images/project-4.png' },
    { id: 5, title: 'Task Manager', category: 'Web Applications', image: '/assets/images/project-8.jpg' },
    { id: 6, title: 'Ad Campaign', category: 'Entertainment Websites', image: '/assets/images/project-3.jpg' },
    { id: 7, title: 'Ad Campaign', category: 'Travel Websites', image: '/assets/images/project-5.png' },
    { id: 8, title: 'Ad Campaign', category: 'Entertainment Websites', image: '/assets/images/project-9.png' },
    { id: 9, title: 'Ad Campaign', category: 'Travel Websites', image: '/assets/images/project-7.png' },
  ];

  categories: string[] = ['All', 'E-commerce Websites', 'Web Applications', 'Entertainment Websites','Travel Websites'];
  selectedCategory: string = 'All';

  filterProjects(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === this.selectedCategory);
  }
}
