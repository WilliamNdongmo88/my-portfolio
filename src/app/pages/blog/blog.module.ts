import { NgModule } from '@angular/core';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';
import { BlogDetailComponent } from '../../components/blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BlogListComponent,
    BlogDetailComponent,
    RouterModule.forChild([
      {
        path: '',
        component: BlogListComponent,
      },
      {
        path: ':id',
        component: BlogDetailComponent,
      },
    ]),
  ],
})
export class BlogModule { }
