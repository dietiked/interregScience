import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { AuthGuard } from './authentication/index';

import { LoginComponent } from './authentication/login/index';

import { ScienceHomeComponent } from './science/index';
import { FormNewComponent } from './science/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'science', component: ScienceHomeComponent },
  { path: 'science/forms/new/:formCategoryId', component: FormNewComponent },
  { path: '**', redirectTo: 'login' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
