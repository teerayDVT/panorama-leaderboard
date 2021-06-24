import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './comps/app-routing.module';
import { AppComponent } from './comps/app.component';
import { PageNotFoundComponent } from './comps/app/page-not-found/page-not-found.component';
import { ArticlesComponent } from './comps/app/blog/articles/articles.component';
import { ArticleComponent } from './comps/app/blog/article/article.component';
import { InvestmentComponent } from './comps/app/invest/investment/investment/investment.component';
import { RiskTakesComponent } from './comps/app/invest/risk-takes/risk-takes/risk-takes.component';
import { RiskTakeComponent } from './comps/app/invest/risk-take/risk-take/risk-take.component';
import { AdminHomeComponent } from './comps/admin/admin-home/admin-home.component';
import { AppHomeComponent } from './comps/app/application-home/application-home.component';
import { InvestmentsComponent } from './comps/app/invest/investments/investments/investments.component';
import { AdminRoutingModule } from './comps/admin/admin-routing.module';
import { ApplicationRoutingModule } from './comps/app/application-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DarkthemeEffects } from './store/effects/darktheme.effects';
import { darkThemeFeatureKey, darkThemeReducer } from './store/reducers/darktheme.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    ArticleComponent,
    AppHomeComponent,
    AppHomeComponent,
    AdminHomeComponent,
    InvestmentsComponent,
    InvestmentComponent,
    RiskTakesComponent,
    RiskTakeComponent
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(darkThemeFeatureKey, darkThemeReducer),
    EffectsModule.forFeature([DarkthemeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
