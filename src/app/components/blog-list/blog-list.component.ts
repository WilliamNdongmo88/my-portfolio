import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogArticle } from '../../services/blog.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: `./blog-list.component.html`,
  styleUrls: [`./blog-list.component.scss`]
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  private router = inject(Router);
  
  searchQuery = '';
  selectedCategory = '';
  filteredArticles: BlogArticle[] = [];
  featuredArticles: BlogArticle[] = [];
  categories: string[] = [];
  displayLimit = signal(6);

  ngOnInit(): void {
    this.categories = this.blogService.getCategories();
    this.featuredArticles = this.blogService.getFeaturedArticles();
    this.loadArticles();
  }

  loadArticles(): void {
    const allArticles = this.searchQuery
      ? this.blogService.searchArticles(this.searchQuery)
      : this.selectedCategory
      ? this.blogService.getArticlesByCategory(this.selectedCategory)
      : this.blogService.getLatestArticles(100);

    this.filteredArticles = allArticles.slice(0, this.displayLimit());
  }

  onSearch(): void {
    this.displayLimit.set(6);
    this.loadArticles();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.searchQuery = '';
    this.displayLimit.set(6);
    this.loadArticles();
  }

  loadMore(): void {
    this.displayLimit.update(limit => limit + 3);
    this.loadArticles();
  }

  viewArticle(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}
