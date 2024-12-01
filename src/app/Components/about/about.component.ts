import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../../Interfaces/ServiceItem';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from "../skill-card/skill-card.component";
import { trigger, transition, style, animate, state } from '@angular/animations';
import { FeatureCardComponent } from "../feature-card/feature-card.component";
import { TranslocoService } from '@jsverse/transloco';
import { SkillCard } from '../../Interfaces/SkillCard';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,  FeatureCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  
})

export class AboutComponent implements OnInit {
  skillCards: SkillCard[] = [];
  constructor(private translocoService: TranslocoService) {}
  inView=false
  translatedAboutMe: string = '';
  ngOnInit(): void {
    this.translocoService.selectTranslate('description.aboutMe').subscribe((translation) => {
      this.translatedAboutMe = translation;
    });
    this.translocoService.selectTranslateObject('skillCards').subscribe((translatedSkillCards: SkillCard[]) => {
      this.skillCards = translatedSkillCards.map((card, index) => ({
        ...card,
        icon: this.getIcons()[index] // Add icons manually since they are not translated
      }));
    });
  }
  
  getIcons(): string[] {
    return [
      'fa-solid fa-code text-2xl text-blue-400',
      'fa-regular fa-heart text-2xl text-blue-400',
      'fa-solid fa-laptop text-2xl text-blue-400',
      'fa-solid fa-mug-hot text-2xl text-blue-400'
    ];
  }
}
