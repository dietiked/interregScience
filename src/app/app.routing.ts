import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DDAuthGuard } from './dd-authentication/index';
import { DashboardComponent } from './dashboard/index';
import { AuthComponent } from './auth/index';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DDAuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }
