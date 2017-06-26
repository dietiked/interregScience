import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DDAuthGuard } from './dd-authentication/index';
import { DashboardComponent } from './dashboard/index';
import { AuthComponent } from './auth/index';
import { Error404Component } from './404/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'login', component: AuthComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [DDAuthGuard]},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }
