import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { FaqComponent } from './faq/faq.component';
import { SupportHomeComponent } from './support-home/support-home.component';
import { SupportComponent } from './support.component';

const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent,
    children: [
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'contact',
        component: ContactSupportComponent
      },
      {
        path: '',
        component: SupportHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
