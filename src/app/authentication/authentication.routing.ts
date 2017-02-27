import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoginComponent } from './login/index';

const appRoutes: Routes = [
  //{ path: 'login', component: LoginComponent}
  //{ path: '**', redirectTo: 'dashboard' }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
