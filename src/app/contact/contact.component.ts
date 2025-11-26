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
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  arrowHover = false;
  http = inject(HttpClient);

  checkboxState: 'neutral' | 'hover' | 'checked' | 'error' = 'neutral';
  isChecked = false;
  showError = false;

  contactData = { name: '', email: '', message: '' };

  mailTest = true;
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (p: any) => JSON.stringify(p),
    options: { headers: { 'Content-Type': 'text/plain' }, responseType: 'text' as const },
  };

  /** Handles checkbox hover state */
  onHover(isHovering: boolean) {
    if (!this.isChecked && this.checkboxState !== 'error') {
      this.checkboxState = isHovering ? 'hover' : 'neutral';
    }
  }

  /** Toggles checkbox and resets error state if needed */
  onToggle() {
    this.isChecked = !this.isChecked;
    this.checkboxState = this.isChecked ? 'checked' : 'neutral';
    if (this.isChecked) this.showError = false;
  }

  /** Returns true if the control is invalid while the form is in error mode */
  isNameInvalid(c: any) {
    return this.showError && c?.invalid;
  }

  /** Returns true if the control is invalid while the form is in error mode */
  isEmailInvalid(c: any) {
    return this.showError && c?.invalid;
  }

  /** Returns true if the control is invalid while the form is in error mode */
  isMessageInvalid(c: any) {
    return this.showError && c?.invalid;
  }

  /** Validates before submit and triggers temporary error state */
  onTrySubmit(form: NgForm, n: any, e: any, m: any) {
    if (!this.isChecked || !form.valid) {
      this.showError = true;
      if (!this.isChecked) this.checkboxState = 'error';
      setTimeout(() => this.resetErrorState(), 4000);
      return;
    }
    this.onSubmit(form);
  }

  /** Sends form or resets when in test mode */
  onSubmit(form: NgForm) {
    if (!form.valid || !this.isChecked) {
      this.showError = true;
      return;
    }
    this.showError = false;
    if (this.mailTest) return this.resetForm(form);

    this.http
      .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe(() => this.resetForm(form));
  }

  /** Resets all temporary validation states */
  private resetErrorState() {
    this.showError = false;
    if (!this.isChecked) this.checkboxState = 'neutral';
  }

  /** Clears the form and restores initial component state */
  private resetForm(form: NgForm) {
    form.resetForm();
    this.isChecked = false;
    this.checkboxState = 'neutral';
    this.contactData = { name: '', email: '', message: '' };
  }
}
