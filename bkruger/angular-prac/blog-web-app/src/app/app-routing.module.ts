import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { InvestComponent } from './invest/invest.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'invest', component: InvestComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
