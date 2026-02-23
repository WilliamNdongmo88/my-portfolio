import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="container hero-content">
        <div class="hero-text">
          <h1>
            Développeur <span class="text-gold">Fullstack</span> & <span class="text-violet">Salesforce</span>
          </h1>
          <p class="hero-description">
            Avec 4 ans d'expérience en développement, je crée des solutions innovantes combinant Angular, Node.js, Java et l'écosystème Salesforce.
          </p>
          <button class="btn-primary" (click)="scrollToProjects()">
            Découvrir mes projets
          </button>
        </div>
        <div class="hero-card glass">
          <div class="avatar">👨‍💻</div>
          <p>William Ndongmo</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      // padding: 3rem 0;
      padding: 3rem 0 0 0;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin: 0 10px 0 10px;
    }

    .hero-text h1 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      font-family: 'Cormorant Garamond', serif;
      font-weight: 700;
    }

    .text-gold {
      color: #fbbf24;
    }

    .text-violet {
      color: #a78bfa;
    }

    .hero-description {
      font-size: 1.125rem;
      color: #94a3b8;
      margin-bottom: 2rem;
    }

    .btn-primary {
      background-color: #fbbf24;
      color: #0f172a;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      background-color: #f59e0b;
      transform: translateY(-2px);
    }

    .hero-card {
      padding: 2rem;
      height: 16rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .avatar {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .hero-card p {
      color: #94a3b8;
    }

    .glass {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
      }

      .hero-text h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class HeroSectionComponent {
  scrollToProjects(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
