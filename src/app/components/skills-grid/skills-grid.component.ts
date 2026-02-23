import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  color: string;
  items: string[];
}

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <h2>Compétences</h2>
        <div class="skills-grid">
          <div class="skill-card glass" *ngFor="let skill of skills" [style.--accent-color]="skill.color">
            <h3 [style.color]="skill.color">{{ skill.category }}</h3>
            <ul>
              <li *ngFor="let item of skill.items">✓ {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      // padding: 5rem 0;
      padding: 3rem 0 0 0;
    }

    .skills-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
      font-family: 'Cormorant Garamond', serif;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .skill-card {
      padding: 2.5rem;
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .skill-card:hover {
      background: rgba(30, 41, 59, 0.8);
      border-color: var(--accent-color);
    }

    .skill-card h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      font-family: 'Cormorant Garamond', serif;
    }

    .skill-card ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .skill-card li {
      color: #94a3b8;
      font-size: 0.95rem;
    }

    .glass {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media (max-width: 768px) {
      .skills-section h2 {
        font-size: 1.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .skills-section {
        padding: 0 0 3rem 0;
      }
    }
  `]
})
export class SkillsGridComponent {
  skills: Skill[] = [
    {
      category: 'Frontend',
      color: '#fbbf24',
      items: ['Angular 19+', 'TypeScript', 'Tailwind CSS', 'SCSS/CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      color: '#a78bfa',
      items: ['Node.js / Express', 'Java / Spring Boot', 'PHP / Symfony', 'REST APIs', 'Microservices']
    },
    {
      category: 'Salesforce',
      color: '#ec4899',
      items: ['Apex', 'Lightning Web Components', 'Flows', 'SOQL/SOSL', 'Visualforce']
    },
    {
      category: 'Bases de données',
      color: '#60a5fa',
      items: ['MySQL', 'Firebase', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'DevOps & Outils',
      color: '#4ade80',
      items: ['Docker', 'Git / GitHub', 'CI/CD', 'Railway / Vercel']
    },
    {
      category: 'Méthodologies',
      color: '#fb923c',
      items: ['Agile / Scrum', 'Tests Unitaires', 'Code Review', 'Documentation']
    }
  ];
}
