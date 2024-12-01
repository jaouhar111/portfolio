import { Component, OnInit } from '@angular/core';
import { HistoryItem } from '../../Interfaces/HistoryItem';
import { CommonModule } from '@angular/common';
import { Skill } from '../../Interfaces/Skill';
import { SkillCardComponent } from "../skill-card/skill-card.component";
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-resumer',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './resumer.component.html',
  styleUrl: './resumer.component.css'
})
export class ResumerComponent implements OnInit {
  title=''
  experinces_title=''
  education: HistoryItem[] = []
  experience: HistoryItem[] =[]
  technicalSkillsTitle = '';
  skillCards: { icon: string; title: any; skills: any; }[] = [];
  
  constructor(private translocoService: TranslocoService) {}
  ngOnInit(): void {
    this.translocoService
      .selectTranslateObject('education')
      .subscribe((translations) => {
        this.education = [
          {
            title: translations.ensaf_title,
            period: translations.ensaf_period,
            description: translations.ensaf_description,
          },
          {
            title: translations.faculty_title,
            period: translations.faculty_period,
            description: translations.faculty_description,
          },
          {
            title: translations.ista_title,
            period: translations.ista_period,
            description: translations.ista_description,
          },
        ];
        this.title =translations.title;
      });
    this.translocoService
      .selectTranslateObject('experience')
      .subscribe((translations) => {
        this.experience = [
          {
            title: translations.atrebo_title,
            period: translations.atrebo_period,
            description: translations.atrebo_description,
          },
          {
            title: translations.cnexia_title,
            period: translations.cnexia_period,
            description: translations.cnexia_description,
          }
          
        ];
        this.experinces_title =translations.title;
      });
      this.translocoService
      .selectTranslateObject('skills')
      .subscribe((skills) => {
        this.skillCards = [
          {
            icon: 'fa-solid fa-code text-2xl text-blue-500',
            title: skills.frontend.title,
            skills: skills.frontend.skills,
          },
          {
            icon: 'fa-solid fa-database text-2xl text-purple-500',
            title: skills.backend.title,
            skills: skills.backend.skills,
          },
          {
            icon: 'fa-solid fa-globe text-2xl text-green-500',
            title: skills.devops.title,
            skills: skills.devops.skills,
          },
          {
            icon: 'fa-solid fa-palette text-2xl text-pink-500',
            title: skills.design.title,
            skills: skills.design.skills,
          },
        ];
      });
      this.translocoService
      .selectTranslate('skills.section_title')
      .subscribe((title) => {
        this.technicalSkillsTitle = title;
      });
      
  }
  

 
  
  
}
