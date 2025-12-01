import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';
import { CommonModule } from '@angular/common';

type Skill = { src: string; label: string; alt?: string };

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) { }

  async navigateToContact() {
    await this.router.navigate(['/'], { fragment: 'contact' });
    setTimeout(() => this.scrollService.scrollToSection('contact'), 0);
  }

  skills: Skill[] = [
    { src: 'assets/img/skills/mySkills/Angular.svg', label: 'Angular' },
    { src: 'assets/img/skills/mySkills/TypeScript.svg', label: 'TypeScript' },
    { src: 'assets/img/skills/mySkills/JavaScript.svg', label: 'JavaScript' },
    { src: 'assets/img/skills/mySkills/HTML.svg', label: 'HTML' },
    { src: 'assets/img/skills/mySkills/CSS.svg', label: 'CSS' },
    { src: 'assets/img/skills/mySkills/REST-API.svg', label: 'REST-API' },
    { src: 'assets/img/skills/mySkills/Firebase.svg', label: 'Firebase' },
    { src: 'assets/img/skills/mySkills/Git.svg', label: 'Git' },
    { src: 'assets/img/skills/mySkills/MateriaDesign.svg', label: 'Material Design' },
    { src: 'assets/img/skills/mySkills/Scrum.svg', label: 'Scrum' },
  ];
}
