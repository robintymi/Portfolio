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
    { src: 'assets/img/skills/mySkills/Angular.png', label: 'Angular' },
    { src: 'assets/img/skills/mySkills/TypeScript.png', label: 'TypeScript' },
    { src: 'assets/img/skills/mySkills/JavaScript.png', label: 'JavaScript' },
    { src: 'assets/img/skills/mySkills/HTML.png', label: 'HTML' },
    { src: 'assets/img/skills/mySkills/CSS.png', label: 'CSS' },
    { src: 'assets/img/skills/mySkills/REST-API.png', label: 'REST-API' },
    { src: 'assets/img/skills/mySkills/Firebase.png', label: 'Firebase' },
    { src: 'assets/img/skills/mySkills/Git.png', label: 'Git' },
    { src: 'assets/img/skills/mySkills/MaterialDesign.png', label: 'Material Design' },
    { src: 'assets/img/skills/mySkills/Scrum.png', label: 'Scrum' },
  ];
}
