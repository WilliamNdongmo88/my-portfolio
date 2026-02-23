import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  color: string;
  technologies: { name: string; color: string }[];
  codeLink: string;
  demoLink?: string;
}

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <h2>Projets Phares</h2>
        <div class="projects-grid">
          <div class="project-card glass" *ngFor="let project of projects">
            <h3 [style.color]="project.color">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="technologies-section">
              <p class="tech-label">Technologies:</p>
              <div class="tech-tags">
                <span class="tech-tag" *ngFor="let tech of project.technologies" [style.backgroundColor]="tech.color + '33'" [style.color]="tech.color">
                  {{ tech.name }}
                </span>
              </div>
            </div>
            <div class="project-links">
              <a [href]="project.codeLink" target="_blank" [style.color]="project.color">Code</a>
              <a *ngIf="project.demoLink" [href]="project.demoLink" target="_blank" [style.color]="project.color">Démo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      // padding: 5rem 0;
      padding: 3rem 0 0 0;
    }

    .projects-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
      font-family: 'Cormorant Garamond', serif;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      padding: 1.5rem;
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 12px;
    }

    .project-card h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      font-family: 'Cormorant Garamond', serif;
    }

    .project-description {
      color: #94a3b8;
      margin-bottom: 1rem;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .technologies-section {
      margin-bottom: 1rem;
    }

    .tech-label {
      font-size: 0.875rem;
      color: #94a3b8;
      margin-bottom: 0.5rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
    }

    .project-links {
      display: flex;
      gap: 0.75rem;
    }

    .project-links a {
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .project-links a:hover {
      opacity: 0.8;
    }

    .glass {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media (max-width: 768px) {
      .projects-section h2 {
        font-size: 1.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .projects-section {
        padding: 0rem 0;
      }
    }
  `]
})
export class ProjectsGridComponent {
  projects: Project[] = [
    {
      title: 'Smart Invite',
      description: 'Plateforme de gestion d\'invitations de mariage avec design élégant et thème doré.',
      color: '#fbbf24',
      technologies: [
        { name: 'Angular 19', color: '#fbbf24' },
        { name: 'Node.js', color: '#60a5fa' },
        { name: 'Firebase', color: '#fb923c' }
      ],
      codeLink: 'https://github.com/WilliamNdongmo88/smart-invites-frontend'
    },
    {
      title: 'Sol Solution QRCode',
      description: 'Système complet de génération et gestion de QR Codes avec intégration Brevo.',
      color: '#a78bfa',
      technologies: [
        { name: 'Angular 19', color: '#a78bfa' },
        { name: 'Java/Spring', color: '#ef4444' },
        { name: 'Brevo API', color: '#eab308' }
      ],
      codeLink: 'https://github.com/WilliamNdongmo88/sol-solution-qrcode',
      demoLink: 'https://sol-solution-qrcode.vercel.app'
    },
    {
      title: 'Artisan des Saveurs',
      description: 'Application e-commerce culinaire avec intégration de moyens de paiement.',
      color: '#ec4899',
      technologies: [
        { name: 'Angular 19', color: '#ec4899' },
        { name: 'Node.js', color: '#4ade80' },
        { name: 'MySQL', color: '#60a5fa' }
      ],
      codeLink: 'https://github.com/WilliamNdongmo88/angular-artisan-des-saveurs',
      demoLink: 'https://artisan-des-saveurs.vercel.app'
    }
  ];
}
