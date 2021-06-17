import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaqComponent } from './support/faq/faq.component';
import { ContactSupportComponent } from './support/contact-support/contact-support.component';
import { SupportHomeComponent } from './support/support-home/support-home.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupportModule } from './support/support.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    FaqComponent,
    ContactSupportComponent,
    SupportHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SupportModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
