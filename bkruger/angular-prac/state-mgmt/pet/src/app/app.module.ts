import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { ArticlesComponent } from './comps/blog/articles.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './comps/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
