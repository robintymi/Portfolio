import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  active = 0;

  projects = [
    {
      title: 'Join',
      duration: '3 weeks',
      about:
        'This app is a Slack clone that improves team communication with real-time messaging and channel organization.',
      process:
        'Modularized features into components/services, set naming conventions, documented decisions, and wrote tests.',
      experience:
        'Worked in a team of 4 as the chat feature owner (UI + websocket integration). Tech stack: Angular, Firebase.',
      tech: [
        { name: 'Angular', icon: 'assets/img/tech/angular.svg' },
        { name: 'TypeScript', icon: 'assets/img/tech/typescript.svg' },
        { name: 'Firebase', icon: 'assets/img/tech/firebase.svg' },
      ],
      image: 'assets/img/projects/dabubble.png',
      live: 'https://example.com/dabubble',
      github: 'https://github.com/you/dabubble',
    },
    {
      title: 'El Pollo Loco',
      duration: '2 weeks',
      about: 'Arcade browser game with collision physics and sprite animations.',
      process:
        'Separated game loop, input controller, and rendering. Automated builds and asset pipeline.',
      experience:
        'Pair programming on physics, code reviews via PRs, short daily standups.',
      tech: [
        { name: 'TypeScript', icon: 'assets/img/tech/typescript.svg' },
        { name: 'HTML', icon: 'assets/img/tech/html.svg' },
        { name: 'CSS', icon: 'assets/img/tech/css.svg' },
      ],
      image: 'assets/img/projects/sharkie.png',
      live: 'https://example.com/sharkie',
      github: 'https://github.com/you/sharkie',
    },
      {
      title: 'CRM System',
      duration: '2 weeks',
      about: 'Arcade browser game with collision physics and sprite animations.',
      process:
        'Separated game loop, input controller, and rendering. Automated builds and asset pipeline.',
      experience:
        'Pair programming on physics, code reviews via PRs, short daily standups.',
      tech: [
        { name: 'TypeScript', icon: 'assets/img/tech/typescript.svg' },
        { name: 'HTML', icon: 'assets/img/tech/html.svg' },
        { name: 'CSS', icon: 'assets/img/tech/css.svg' },
      ],
      image: 'assets/img/projects/sharkie.png',
      live: 'https://example.com/sharkie',
      github: 'https://github.com/you/sharkie',
    },
      {
      title: 'Ongoing Project',
      duration: '2 weeks',
      about: 'Arcade browser game with collision physics and sprite animations.',
      process:
        'Separated game loop, input controller, and rendering. Automated builds and asset pipeline.',
      experience:
        'Pair programming on physics, code reviews via PRs, short daily standups.',
      tech: [
        { name: 'TypeScript', icon: 'assets/img/tech/typescript.svg' },
        { name: 'HTML', icon: 'assets/img/tech/html.svg' },
        { name: 'CSS', icon: 'assets/img/tech/css.svg' },
      ],
      image: 'assets/img/projects/sharkie.png',
      live: 'https://example.com/sharkie',
      github: 'https://github.com/you/sharkie',
    },
    // ...Join, Ongoing Project
  ];
}
