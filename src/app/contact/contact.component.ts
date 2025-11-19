import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  // Arrow-Hover für "Back to Top"-Pfeil
  arrowHover = false;

  // HttpClient via inject()
  http = inject(HttpClient);

  // Checkbox-UI
  checkboxState: 'neutral' | 'hover' | 'checked' = 'neutral';
  isChecked = false;
  showError = false;

  // Formdaten (Two-Way Binding)
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  // Mail-Testmodus: true = kein echtes Senden, nur Konsole + Reset
  mailTest = true;

  // Konfiguration für POST-Request
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  // Checkbox Hover-Handling
  onHover(isHovering: boolean) {
    if (!this.isChecked) {
      this.checkboxState = isHovering ? 'hover' : 'neutral';
    }
  }

  // Checkbox Toggle
  onToggle() {
    this.isChecked = !this.isChecked;
    this.checkboxState = this.isChecked ? 'checked' : 'neutral';
    // Fehlermeldung wieder ausblenden, wenn der User die Checkbox anklickt
    if (this.isChecked) {
      this.showError = false;
    }
  }

  onSubmit(ngForm: NgForm) {
    // Wenn Formular ungültig oder Checkbox nicht gesetzt → Fehlermeldung
    if (!ngForm.valid || !this.isChecked) {
      this.showError = !this.isChecked;
      ngForm.form.markAllAsTouched();
      return;
    }

    this.showError = false;

    // Testmodus: nur Konsole + Reset
    if (this.mailTest) {
      console.log('Kontakt (TESTMODE):', this.contactData);
      this.resetForm(ngForm);
      return;
    }

    // Echter Versand
    this.http
      .post(
        this.post.endPoint,
        this.post.body(this.contactData),
        this.post.options
      )
      .subscribe({
        next: (response) => {
          console.log('Mail erfolgreich gesendet:', response);
          this.resetForm(ngForm);
        },
        error: (error) => {
          console.error('Fehler beim Senden:', error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.isChecked = false;
    this.checkboxState = 'neutral';
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
