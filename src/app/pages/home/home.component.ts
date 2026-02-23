import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsGridComponent } from '../../components/skills-grid/skills-grid.component';
import { ProjectsGridComponent } from '../../components/projects-grid/projects-grid.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsGridComponent,
    ProjectsGridComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  template: `
    <div class="main-container">
      <app-header></app-header>
      <div class="spacer">
        <app-hero-section></app-hero-section>
        <app-about-section></app-about-section>
        <app-skills-grid></app-skills-grid>
        <app-projects-grid></app-projects-grid>
        <app-contact-section></app-contact-section>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .main-container {
      min-height: 100vh;
      background-color: #0f172a;
      color: #e2e8f0;
    }
    .spacer {
      margin: 0 13rem 0 13rem
    }

    @media (max-width: 1300px) {
      .spacer {
        margin: 0 3rem 0 3rem;
      }
    }

    @media (max-width: 768px) {
      .spacer {
        margin: 0 0.5rem 0 0.5rem;
      }
    }
  `]
})
export class HomeComponent { }
