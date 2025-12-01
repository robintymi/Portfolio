import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  active = 0;

  openLink(url: string | null) {
    if (!url) return;
    window.open(url, "_blank", "noopener");
  }

  projects = [
    {
      key: 'join',
      hasDuration: true,
      hasProcess: true,
      hasExperience: true,
      tech: [
        { name: 'HTML', icon: 'assets/img/projects/html.png' },
        { name: 'CSS', icon: 'assets/img/projects/css.png' },
        { name: 'JavaScript', icon: 'assets/img/projects/Javascript.png' },
        { name: 'Firebase', icon: 'assets/img/projects/Firebase.png' },
      ],
      image: 'assets/img/projects/join.png',
      live: 'https://robin-erike.de/projects/join/',
      github: 'https://github.com/robintymi/Joinrobin',
    },
    {
      key: 'elPolloLoco',
      hasDuration: true,
      hasProcess: true,
      hasExperience: true,
      tech: [
        { name: 'JavaScript', icon: 'assets/img/projects/Javascript.png' },
        { name: 'HTML', icon: 'assets/img/projects/html.png' },
        { name: 'CSS', icon: 'assets/img/projects/css.png' },
      ],
      image: 'assets/img/projects/el-pollo-loco.png',
      live: 'https://robin-erike.de/projects/El-pollo-loco',
      github: 'https://github.com/robintymi/El-pollo-loco',
    },
    {
      key: 'pokedex',
      hasDuration: true,
      hasProcess: true,
      hasExperience: true,
      tech: [
        { name: 'JavaScript', icon: 'assets/img/projects/Javascript.png' },
        { name: 'HTML', icon: 'assets/img/projects/html.png' },
        { name: 'CSS', icon: 'assets/img/projects/css.png' },
      ],
      image: 'assets/img/projects/Pokedex.png',
      live: 'https://robin-erike.de/projects/PokedexV2',
      github: 'https://github.com/robintymi/Pokedex-1',
    },
    // {
    //   key: 'ongoing',
    //   hasDuration: false,
    //   hasProcess: false,
    //   hasExperience: false,
    //   tech: [
    //     { name: 'Angular', icon: 'assets/img/projects/Angular.png' },
    //     { name: 'TypeScript', icon: 'assets/img/projects/typescript.png' },
    //     { name: 'Firebase', icon: 'assets/img/projects/Firebase.png' },
    //   ],
    //   image: 'assets/img/projects/ongoing-project.png',
    //   live: null,
    //   github: null,
    // },
  ];
}
