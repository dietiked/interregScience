import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../authentication/index';
import { ScienceHomeComponent } from './index';

const scienceRoutes: Routes = [
    { path: 'science', component: ScienceHomeComponent } //, canActivate: [AuthGuard] },
    // otherwise redirect to home
];

@NgModule({
  imports: [ RouterModule.forRoot(scienceRoutes) ],
  exports: [ RouterModule ]
})
export class ScienceRoutingModule { }
