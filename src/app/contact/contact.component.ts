import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  arrowHover = false;
  http= inject(HttpClient);
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
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
