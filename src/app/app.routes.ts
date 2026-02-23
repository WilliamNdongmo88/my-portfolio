import { HomeComponent } from './pages/home/home.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
