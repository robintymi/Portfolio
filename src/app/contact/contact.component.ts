import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Checkbox-UI
  checkboxState: 'neutral' | 'hover' | 'checked' = 'neutral';
  isChecked = false;
  showError = false;

  // Formdaten (zwei-Wege-Bindung)
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onHover(isHovering: boolean) {
    if (!this.isChecked) this.checkboxState = isHovering ? 'hover' : 'neutral';
  }
  onToggle() {
    this.isChecked = !this.isChecked;
    this.checkboxState = this.isChecked ? 'checked' : 'neutral';
  }

  onSubmit(ngForm: NgForm) {
    this.showError = !this.isChecked;

    if (!this.isChecked) return;                 // DSGVO-Checkbox nötig
    if (!ngForm.valid) {                         // invalid → Fehler anzeigen
      ngForm.control.markAllAsTouched();
      return;
    }

    // ✅ gültig + Checkbox → senden
    console.log('Kontakt:', this.contactData);

    // später: API/Funktion zum Senden einbauen

    // Reset nach Erfolg
    ngForm.resetForm();
    this.isChecked = false;
    this.checkboxState = 'neutral';
  }
}
