import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component'; // Pfad anpassen

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, MobileNavbarComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  hidePicture = false;

  onMenuOpenChange(open: boolean) {
    this.hidePicture = open;
  }
}
