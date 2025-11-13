import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reference {
  name: string;
  project: string;
  quote: string;
  image: string;
  linkedin: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      name: 'coming soon',
      project: 'DA Bubble',
      quote: '',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: '',
    },
    {
      name: 'Adrian Bieber',
      project: 'Project Join',
      quote: '“Working with Robin on the Join project was straightforward and pleasant.”',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: 'https://www.linkedin.com/in/adrian-bieber-6a6a111ba/',
    },
    {
      name: 'coming soon',
      project: 'DA Bubble',
      quote: 'coming soon',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: '#',
    },
  ];
}
