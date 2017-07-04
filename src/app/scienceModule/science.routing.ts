import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DDAuthGuard } from '../dd-authentication/index';
import { ScienceHomeComponent } from './index';
import { FormNewComponent, FormEditComponent } from './index';

const scienceRoutes: Routes = [
    { path: 'bonitur', component: ScienceHomeComponent, canActivate: [DDAuthGuard], children: [
    ]}, // },
    { path: 'bonitur/boniturblatt/neu/:formCategoryId', component: FormNewComponent, canActivate: [DDAuthGuard]},
    { path: 'bonitur/boniturblatt/:id', component: FormEditComponent, canActivate: [DDAuthGuard]},
    // otherwise redirect to home
];

@NgModule({
  imports: [ RouterModule.forChild(scienceRoutes) ],
  exports: [ RouterModule ]
})
export class ScienceRoutingModule { }
