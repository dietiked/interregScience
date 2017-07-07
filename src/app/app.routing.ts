import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './authModule/index';
import { DashboardComponent } from './dashboardComponent/index';
import { Error404Component } from './404Component/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }
