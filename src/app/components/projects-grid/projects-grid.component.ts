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
  templateUrl: './projects-grid.component.html',
  styleUrls: [`./projects-grid.component.scss`]
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
      codeLink: 'https://github.com/WilliamNdongmo88/smart-invites-frontend',
      demoLink: 'https://www.smart-invite.com/'
    },
    {
      title: 'Sol Solution QRCode',
      description: 'Système complet d\'authentification de documents via QR Codes avec intégration Brevo.',
      color: '#a78bfa',
      technologies: [
        { name: 'Angular 19', color: '#a78bfa' },
        { name: 'Java/Spring', color: '#ef4444' },
        { name: 'Brevo API', color: '#eab308' }
      ],
      codeLink: 'https://github.com/WilliamNdongmo88/sol-solution-qrcode',
      demoLink: 'https://www.sol-solution-qrcode.vercel.app'
    },
    {
      title: 'Artisan des Saveurs',
      description: 'Application e-commerce culinaire avec intégration de moyens de paiement.',
      color: '#ec4899',
      technologies: [
        { name: 'Angular 19', color: '#ec4899' },
        { name: 'Java/Spring', color: '#4ade80' },
        { name: 'MySQL', color: '#60a5fa' }
      ],
      codeLink: 'https://github.com/WilliamNdongmo88/angular-artisan-des-saveurs',
      demoLink: 'https://artisan-des-saveurs.vercel.app'
    }
  ];
}
