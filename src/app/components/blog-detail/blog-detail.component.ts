import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogArticle } from '../../services/blog.service';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: [`./blog-detail.component.scss`],
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  article: BlogArticle | undefined;
  previousArticle: BlogArticle | undefined;
  nextArticle: BlogArticle | undefined;
  relatedArticles: BlogArticle[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.article = this.blogService.getArticleById(id);
      
      if (this.article) {
        this.relatedArticles = this.blogService.getRelatedArticles(id, 3);
        this.loadNavigationArticles();
      }
    });
  }

  loadNavigationArticles(): void {
    if (!this.article) return;
    
    const allArticles = this.blogService.getLatestArticles(100);
    const currentIndex = allArticles.findIndex(a => a.id === this.article!.id);
    
    if (currentIndex > 0) {
      this.nextArticle = allArticles[currentIndex - 1];
    }
    if (currentIndex < allArticles.length - 1) {
      this.previousArticle = allArticles[currentIndex + 1];
    }
  }

  viewArticle(id: string): void {
    this.router.navigate(['/blog', id]);
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
