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
  checkboxState: 'neutral' | 'hover' | 'checked' = 'neutral';
  isChecked = false;
  showError = false;
  contactData = { name: '', email: '', message: '' };
  mailTest = true;
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: { headers: { 'Content-Type': 'text/plain' }, responseType: 'text' as const },
  };

  onHover(isHovering: boolean) {
    if (!this.isChecked) this.checkboxState = isHovering ? 'hover' : 'neutral';
  }

  onToggle() {
    this.isChecked = !this.isChecked;
    this.checkboxState = this.isChecked ? 'checked' : 'neutral';
    if (this.isChecked) this.showError = false;
  }

  isNameInvalid(ctrl: any) {
    return this.showError && ctrl?.invalid;
  }

  isEmailInvalid(ctrl: any) {
    return this.showError && ctrl?.invalid;
  }

  isMessageInvalid(ctrl: any) {
    return this.showError && ctrl?.invalid;
  }

  onTrySubmit(form: NgForm, nameModel: any, emailModel: any, messageModel: any) {
    if (!this.isChecked || !form.valid) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 4000);
      return;
    }
    this.onSubmit(form);
  }

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.isChecked) {
      this.showError = true;
      return;
    }
    this.showError = false;
    if (this.mailTest) {
      this.resetForm(ngForm);
      return;
    }
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => this.resetForm(ngForm),
        error: () => { },
        complete: () => { },
      });
  }

  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.isChecked = false;
    this.checkboxState = 'neutral';
    this.contactData = { name: '', email: '', message: '' };
  }
}
