import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BlogRoutingModule
  ]
})
export class BlogModule { }
