import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  githubHover = false;
  mailHover = false;
  linkedinHover = false;

  constructor(private router: Router) { }

  /** Navigates to legal notice and scrolls to the top */
  goLegalNotice(e: Event) {
    e.preventDefault();
    this.router.navigate(['/legal-notice'])
      .then(() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0));
  }
}
