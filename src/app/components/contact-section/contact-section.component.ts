import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <!-- <h2>Contactez-moi</h2> -->
        <h2>Prêt à collaborer ?</h2>
        <div class="contact-card glass">
          <div class="contact-grid">
            <p>Contactez-moi pour discuter de vos projets et idées.</p>  
          </div>
          <div class="contact-buttons">
            <a routerLink="/contact" class="btn btn-gold">Me contacter</a>
            <a href="https://github.com/WilliamNdongmo88" target="_blank" class="btn btn-violet">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" class="btn btn-blue">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 3rem 0;
    }

    .contact-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
      font-family: 'Cormorant Garamond', serif;
    }

    .contact-card {
      padding: 2rem;
      max-width: 42rem;
      margin: 0 auto;
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 12px;
    }

    .contact-grid {
      // display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 20px;
    }

    .contact-item {
      display: flex;
      flex-direction: column;
    }

    .contact-label {
      color: #94a3b8;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .contact-link {
      color: #fbbf24;
      font-size: 1.125rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: #f59e0b;
    }

    .contact-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .btn {
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-gold {
      background-color: #fbbf24;
      color: #0f172a;
    }

    .btn-gold:hover {
      background-color: #f59e0b;
      transform: translateY(-2px);
    }

    .btn-violet {
      background-color: #a78bfa;
      color: #0f172a;
    }

    .btn-violet:hover {
      background-color: #9370db;
      transform: translateY(-2px);
    }

    .btn-blue {
      background-color: #60a5fa;
      color: #0f172a;
    }

    .btn-blue:hover {
      background-color: #3b82f6;
      transform: translateY(-2px);
    }

    .glass {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media (max-width: 768px) {
      .contact-section h2 {
        font-size: 1.5rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .contact-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        text-align: center;
      }

      .contact-section {
        padding: 3rem 0;
      }
    }
  `]
})
export class ContactSectionComponent { }
