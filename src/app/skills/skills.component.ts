import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
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
}
