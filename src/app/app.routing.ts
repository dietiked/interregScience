import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
//import { DDAuthGuard } from './dd-authentication/index';

import { AuthComponent } from './auth/index';

import { ScienceHomeComponent } from './science/index';
import { FormNewComponent } from './science/index';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },//, canActivate: [DDAuthGuard] },
  { path: 'science', component: ScienceHomeComponent},//, canActivate: [DDAuthGuard] },
  { path: 'science/forms/new/:formCategoryId', component: FormNewComponent},//, canActivate: [DDAuthGuard] },
  { path: '**', redirectTo: 'login' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
