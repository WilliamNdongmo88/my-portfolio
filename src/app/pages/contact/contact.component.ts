import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  submitted = false;

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    this.submitted = true;

    // Validation
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      return;
    }

    if (!this.isValidEmail(this.formData.email)) {
      return;
    }

    if (this.formData.message.length < 10) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Simuler l'envoi du message
    setTimeout(() => {
      console.log('Formulaire soumis:', this.formData);
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.submitted = false;

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}
