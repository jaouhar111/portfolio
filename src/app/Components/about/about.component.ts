import { Component } from '@angular/core';
import { ServiceItem } from '../../Interfaces/ServiceItem';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from "../skill-card/skill-card.component";
import { trigger, transition, style, animate, state } from '@angular/animations';
import { FeatureCardComponent } from "../feature-card/feature-card.component";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillCardComponent, FeatureCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  
})

export class AboutComponent {
  inView=false
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
      icon: 'fa-solid fa-code text-2xl text-blue-400', // Tailwind-compatible icon classes
      title: 'Clean Code',
      skills: 'Writing maintainable and scalable code',
    },
    {
      icon: 'fa-regular fa-heart text-2xl text-blue-400',
      title: 'Passionate',
      skills: 'Dedicated to creating the best solutions',
    },
    {
      icon: 'fa-solid fa-laptop text-2xl text-blue-400',
      title: 'Responsive',
      skills: 'Designs that work on all devices',
    },
    {
      icon: 'fa-solid fa-mug-hot text-2xl text-blue-400',
      title: 'Dedicated',
      skills: 'Committed to continuous learning',
    },
  ];
 
}
