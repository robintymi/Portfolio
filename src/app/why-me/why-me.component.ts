import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) { }

  async navigateToContact() {
    await this.router.navigate(['/'], { fragment: 'contact' });
    setTimeout(() => this.scrollService.scrollToSection('contact'), 0);
  }
}
