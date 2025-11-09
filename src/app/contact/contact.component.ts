import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  checkboxState: 'neutral' | 'hover' | 'checked' = 'neutral';
  isChecked = false;
  showError = false;

  onHover(isHovering: boolean) {
    if (!this.isChecked) {
      this.checkboxState = isHovering ? 'hover' : 'neutral';
    }
  }

  onToggle() {
    this.isChecked = !this.isChecked;
    this.checkboxState = this.isChecked ? 'checked' : 'neutral';
  }

  onSubmit() {
  if (this.isChecked) {
    console.log('Form submitted!');
    // später kannst du hier dein E-Mail- oder API-Handling einbauen
  }
}

}
