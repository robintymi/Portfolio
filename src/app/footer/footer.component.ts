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

  goLegalNotice(event: Event) {
    event.preventDefault(); // verhindert den Standard-Link
    this.router.navigate(['/legal-notice']).then(() => {
      // Scroll sicher nach oben
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 0);
    });
  }
}
