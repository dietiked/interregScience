import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DDAuthGuard } from '../dd-authentication/index';
import { ScienceHomeComponent } from './index';
import { FormNewComponent } from './index';

const scienceRoutes: Routes = [
    { path: 'wissenschaft', component: ScienceHomeComponent, canActivate: [DDAuthGuard], children: [
    ]}, // },
    { path: 'wissenschaft/boniturblatt/neu/:formCategoryId', component: FormNewComponent, canActivate: [DDAuthGuard]},
    // otherwise redirect to home
];

@NgModule({
  imports: [ RouterModule.forChild(scienceRoutes) ],
  exports: [ RouterModule ]
})
export class ScienceRoutingModule { }
