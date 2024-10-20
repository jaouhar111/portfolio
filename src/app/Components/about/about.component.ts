import { Component } from '@angular/core';
import { ServiceItem } from '../../Interfaces/ServiceItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  services: ServiceItem[] = [
    {
      icon: 'fa-brands fa-angular text-yellow-500 text-3xl',
      title: 'Développement Angular',
      description: `Développement d'applications web dynamiques et performantes à l'aide d'Angular.`
    },
    {
      icon: 'fa-brands fa-node text-yellow-500 text-3xl',
      title: 'Développement d\'API',
      description: 'Création et intégration d\'API robustes à un niveau expert pour améliorer la fonctionnalité et l\'interopérabilité'
    },
    {
      icon: 'fa-solid fa-server text-yellow-500 text-3xl',
      title: 'Développement SQL Server',
      description: `Expertise dans la gestion et l'optimisation de bases de données SQL Server pour des performances fiables et évolutives`
    },
    {
      icon: 'fa-brands fa-python text-yellow-500 text-3xl',
      title: 'Tests avec Selenium',
      description: `Optimisation de la qualité de vos applications web grâce à des tests automatisés avec Selenium`
    }
  ];

}
