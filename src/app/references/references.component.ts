import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents a single reference entry.
 */
interface Reference {
  key: string;
  image: string;
  linkedin: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  /**
   * List of reference entries displayed on the page.
   */
  references: Reference[] = [
    {
      key: 'adrianBieber',
      image: 'assets/img/references/Ellipse 02.png',
      linkedin: 'https://www.linkedin.com/in/adrian-bieber-6a6a111ba/'
    },
  ];
}
