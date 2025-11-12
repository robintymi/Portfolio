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
      duration: '7 weeks',
      about:
        'Join is a task management application inspired by the Kanban and Scrum methodologies. It allows users to create, assign, and organize tasks across different categories, manage contacts, and track project progress visually using drag-and-drop boards.',
      process:
        'We worked in a team of three using an agile workflow based on Scrum. I contributed to both the front-end logic and UI structure, writing modular, reusable JavaScript components in Visual Studio Code. We used Kanban boards to plan sprints and organize our weekly goals.',
      experience:
        'Our collaboration was based on continuous feedback, daily standups, and sprint reviews. We shared responsibilities in implementing core features such as task creation, login functionality, and contact management. Firebase was used for authentication and as a real-time database.',
      tech: [
        { name: 'HTML', icon: '/assets/img/projects/html.png' },
        { name: 'CSS', icon: '/assets/img/projects/css.png' },
        { name: 'JavaScript', icon: '/assets/img/projects/Javascript.png' },
        { name: 'Firebase', icon: '/assets/img/projects/Firebase.png' },
      ],
      image: '/assets/img/projects/join.png',
      live: 'https://robin-erike.de/projects/join/',
      github: 'https://github.com/robintymi/Joinrobin',
    },
    {
      title: 'El Pollo Loco',
      duration: '4 weeks',
      about:
        'El Pollo Loco is a 2D jump’n’run browser game developed with pure JavaScript, HTML, and CSS. The player controls a character navigating through multiple levels, avoiding or defeating enemies while collecting items. The game includes collision detection, sprite-based animations, background music, and sound effects, optimized for both desktop and mobile devices.',
      process:
        'I structured the game logic into independent modules handling rendering, character movement, collision physics, and audio control. Using object-oriented JavaScript, I implemented a clean game loop and asset management system. Animations and responsive controls were fine-tuned for mobile compatibility and smooth performance.',
      experience:
        'Working independently, I focused on creating polished gameplay, fluid animations, and immersive sound design. Through iterative testing, I balanced game mechanics and optimized performance for different screen sizes and devices.',
      tech: [
        { name: 'JavaScript', icon: '/assets/img/projects/Javascript.png' },
        { name: 'HTML', icon: '/assets/img/projects/html.png' },
        { name: 'CSS', icon: '/assets/img/projects/css.png' },
      ],
      image: '/assets/img/projects/el-pollo-loco.png',
      live: 'https://robin-erike.de/projects/El-pollo-loco',
      github: 'https://github.com/robintymi/El-pollo-loco',
    },

    {
      title: 'Pokedex',
      duration: '4 weeks',
      about:
        'The Pokedex is a web application built with HTML, CSS, and JavaScript that interacts with the official PokéAPI to display detailed Pokémon information. Users can browse through Pokémon, view their stats, types, and images in an interactive and responsive interface.',

      process:
        'I designed and developed the application following a modular approach. Data is fetched dynamically from the PokéAPI using asynchronous JavaScript (fetch API). I implemented pagination, loading states, and a detail view for each Pokémon. The structure is organized into reusable functions for rendering, fetching, and handling user interactions.',

      experience:
        'Throughout the project, I focused on improving my understanding of REST APIs, asynchronous JavaScript, and DOM manipulation. I practiced clean code principles and performance optimization by caching data and minimizing redundant API calls. Additionally, I refined my responsive design and accessibility techniques.',

      tech: [
        { name: 'JavaScript', icon: '/assets/img/projects/Javascript.png' },
        { name: 'HTML', icon: '/assets/img/projects/html.png' },
        { name: 'CSS', icon: '/assets/img/projects/css.png' },
      ],

      image: '/assets/img/projects/Pokedex.png',
      live: 'https://robin-erike.de/projects/PokedexV2',
      github: 'https://github.com/robintymi/Pokedex-1'
    },
    {
      title: 'Ongoing Project',
      about:
        'This project is currently in development. Stay tuned for updates and new features coming soon!',
      tech: [
        { name: 'Angular', icon: '/assets/img/projects/Angular.png' },
        { name: 'TypeScript', icon: '/assets/img/projects/typescript.png' },
        { name: 'Firebase', icon: '/assets/img/projects/Firebase.png' },
      ],
      image: '/assets/img/projects/ongoing-project.png',
    }

  ];
}
