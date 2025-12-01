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
    { src: 'assets/skills/angular.svg', label: 'Angular' },
    { src: 'assets/skills/typescript.svg', label: 'TypeScript' },
    { src: 'assets/skills/javascript.svg', label: 'JavaScript' },
    { src: 'assets/skills/html.svg', label: 'HTML' },
    { src: 'assets/skills/css.svg', label: 'CSS' },
    { src: 'assets/skills/api.svg', label: 'REST-API' },
    { src: 'assets/skills/firebase.svg', label: 'Firebase' },
    { src: 'assets/skills/git.svg', label: 'Git' },
    { src: 'assets/skills/material.svg', label: 'Material Design' },
    { src: 'assets/skills/scrum.svg', label: 'Scrum' },
  ];
}
