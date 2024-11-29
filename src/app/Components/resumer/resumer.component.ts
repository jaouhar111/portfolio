import { Component } from '@angular/core';
import { HistoryItem } from '../../Interfaces/HistoryItem';
import { CommonModule } from '@angular/common';
import { Skill } from '../../Interfaces/Skill';
import { SkillCardComponent } from "../skill-card/skill-card.component";

@Component({
  selector: 'app-resumer',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './resumer.component.html',
  styleUrl: './resumer.component.css'
})
export class ResumerComponent {
  education: HistoryItem[] = [
    {
      title: 'École Nationale des Sciences Appliquées de Fès',
      period: '2022 — 2024',
      description: 'Le programme forme aux aspects techniques et managériaux du développement logiciel. Il couvre le développement full stack, incluant les technologies front-end et back-end, ainsi que la gestion de projet et le leadership. Les diplômés sont préparés à des rôles tels que Développeur Full Stack, Ingénieur Logiciel ou Responsable Technique, dans divers secteurs, des startups aux grandes entreprises.'
    },
    {
      title: 'Faculté des Sciences de Fès',
      period: '2020 — 2021',
      description: 'Le programme allie développement logiciel et création de contenus multimédias. Il couvre la programmation, la conception logicielle, la gestion de projet et le développement d\'interfaces multimédias (jeux vidéo, applications interactives). Les étudiants maîtrisent divers langages de programmation et outils de gestion de projets multimédias.'
    },
    {
      title: 'ISTA HAY AL ADARISSA de Fès',
      period: '2016 — 2018',
      description: 'Le programme couvre les compétences en programmation, gestion de projets et conception de solutions informatiques. Les diplômés sont préparés à travailler dans divers secteurs, en mettant en œuvre des technologies innovantes pour répondre aux besoins des entreprises.'
    }
  ];

  experience: HistoryItem[] = [
    {
      title: 'Atrebo Tree',
      period: '2024 — Present',
      description: 'développe, modifie et teste le code des sites Web et des interfaces d\'applications. J\'analyse la qualité, la sécurité et l\'expérience utilisateur, tout en assurant la maintenance et la révision des sites. Je participe à la conception des sites et évalue des logiciels interactifs.'
    },
    {
      title: 'Cnexia',
      period: '2021 — 2024',
      description: 'réponds aux demandes des clients, traite les plaintes, remboursements et paiements. Je prends les commandes, mets à jour les comptes et promouvois les services. J\'informe les clients sur les produits, tarifs et politiques.'
    },
    /* {
      title: 'Great Call',
      period: '2019 — 2020',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    } */
  ];
  skills: Skill[] = [
    { name: 'Dot net', level: 80 },
    { name: 'Sql Server', level: 70 },
    { name: 'Angular', level: 90 },
    { name: 'WordPress', level: 70 }
  ];
  skillCards = [
    {
      icon: 'fa-solid fa-code text-2xl text-blue-500', // Tailwind-compatible icon classes
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: 'fa-solid fa-database text-2xl text-purple-500',
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: 'fa-solid fa-globe text-2xl text-green-500',
      title: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    },
    {
      icon: 'fa-solid fa-palette text-2xl text-pink-500',
      title: 'Design & Tools',
      skills: ['Figma', 'Git', 'Jest', 'Webpack'],
    },
  ];
}
