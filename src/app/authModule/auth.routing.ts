import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent, SignupComponent } from './index';

const routes: Routes = [
  { path: '/signup', component: SignupComponent },
  { path: '/signin', component: SigninComponent },
  { path: '/signout', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

export const routedComponents = [SigninComponent, SignupComponent];