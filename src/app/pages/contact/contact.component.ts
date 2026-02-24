import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { timer } from 'rxjs';

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

  constructor(private contactService: ContactService, private ngZone: NgZone) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(form: NgForm): void {
    console.log('Formulaire soumis avec les données :', this.formData);
    
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;

    if (!this.formData.name || !this.formData.email ||
      !this.formData.subject || !this.formData.message ||
      !this.isValidEmail(this.formData.email) || this.formData.message.length < 10
    ) {
      return;
    }

    this.isSubmitting = true;

    this.contactService.send(this.formData)
      .subscribe({
        next: (response) => {
          console.log('response: ', response);
          form.resetForm();
          this.formData = { name: '', email: '', subject: '', message: '' };
          this.submitted = false;
          this.isSubmitting = false;
          this.submitSuccess = true;
          timer(2000).subscribe(() => {
            this.submitSuccess = false;
          });
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi du message', error);
          this.isSubmitting = false;
          this.submitError = true;
          setTimeout(() => this.submitError = false, 5000);
        }
      });
  }
}
