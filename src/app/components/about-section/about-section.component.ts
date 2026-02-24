import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <h2>À propos de moi</h2>
        <div class="about-card glass">
          <p>
            Je suis un développeur passionné par la création de solutions web modernes et performantes. Spécialisé dans l'écosystème Salesforce avec une expertise approfondie en Apex, Lightning Web Components et Flows, je complète cette expertise par une solide maîtrise du développement Fullstack.
          </p>
          <p>
            Mon parcours inclut une expérience professionnelle chez Noeli Ets et Accenture, où j’ai développé des solutions personnalisées sur Salesforce. Actuellement, je travaille à temps partiel en tant que développeur Java/Spring Boot, NodeJs/Express et Angular chez DateCenter, où je conçois et implémente des APIs REST sécurisées avec JWT et OAuth2.
          </p>
          <p>
            Je suis certifié Salesforce Platform Developer et JavaScript Developer, et je maîtrise les méthodologies Agile (Scrum) ainsi que les outils DevOps modernes comme Docker et CI/CD.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      // padding: 5rem 0;
      padding: 3rem 0 0 0;
    }

    .about-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
      font-family: 'Cormorant Garamond', serif;
    }

    .about-card {
      padding: 2rem;
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 12px;
    }

    .about-card p {
      font-size: 1.125rem;
      color: #94a3b8;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .about-card p:last-child {
      margin-bottom: 0;
    }

    .glass {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media (max-width: 768px) {
      .about-section h2 {
        font-size: 1.5rem;
      }
      .about-section {
        padding: 3rem 0 3rem 0;
      }
    }
  `]
})
export class AboutSectionComponent { }
