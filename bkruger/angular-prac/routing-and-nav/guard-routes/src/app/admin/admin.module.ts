import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminComponent } from './admin/admin.component';
// import { AdminDashboardComponent } from './admin-dashboard.component';
import { BlogAdminComponent } from './blog/blog-admin.component';
import { InvestAdminComponent } from './invest/invest-admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    BlogAdminComponent,
    InvestAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
