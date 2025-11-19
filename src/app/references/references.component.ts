import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Reference {
  key: string;            // ← neuer Schlüssel
  image: string;
  linkedin: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      key: 'comingSoon1',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: ''
    },
    {
      key: 'adrianBieber',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: 'https://www.linkedin.com/in/adrian-bieber-6a6a111ba/'
    },
    {
      key: 'comingSoon2',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: '#'
    }
  ];
}
