import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; 2026 William Ndongmo. Tous droits réservés.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid rgba(148, 163, 184, 0.2);
      padding: 2rem 0;
    }

    .footer-content {
      text-align: center;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .footer-content {
        font-size: 0.875rem;
      }
    }
  `]
})
export class FooterComponent { }
