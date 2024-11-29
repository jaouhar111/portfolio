import { Component } from '@angular/core';
import { ServiceItem } from '../../Interfaces/ServiceItem';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from "../skill-card/skill-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  services: ServiceItem[] = [
    {
      icon: 'fa-brands fa-angular text-blue-500 text-3xl',
      title: 'Développement Angular',
      description: `Développement d'applications web dynamiques et performantes à l'aide d'Angular.`
    },
    {
      icon: 'fa-brands fa-node text-blue-500 text-3xl',
      title: 'Développement d\'API',
      description: 'Création et intégration d\'API robustes à un niveau expert pour améliorer la fonctionnalité et l\'interopérabilité'
    },
    {
      icon: 'fa-solid fa-server text-blue-500 text-3xl',
      title: 'Développement SQL Server',
      description: `Expertise dans la gestion et l'optimisation de bases de données SQL Server pour des performances fiables et évolutives`
    },
    {
      icon: 'fa-brands fa-python text-blue-500 text-3xl',
      title: 'Tests avec Selenium',
      description: `Optimisation de la qualité de vos applications web grâce à des tests automatisés avec Selenium`
    }
  ];

  skillCards = [
    {
      icon: 'fa-solid fa-code text-2xl', // Tailwind-compatible icon classes
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: 'fa-solid fa-database text-2xl',
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: 'fa-solid fa-globe text-2xl',
      title: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    },
    {
      icon: 'fa-solid fa-palette text-2xl',
      title: 'Design & Tools',
      skills: ['Figma', 'Git', 'Jest', 'Webpack'],
    },
  ];

}
