import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './comps/app.component';
import { ArticlesComponent } from './comps/blog/articles/articles.component';
import { ArticleComponent } from './comps/blog/article/article.component';
import { BlogModule } from './comps/blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
