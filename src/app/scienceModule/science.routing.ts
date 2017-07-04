import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../authModule/_guards/authentication.guard';
import { ScienceHomeComponent } from './index';
import { FormNewComponent, FormEditComponent } from './index';

const scienceRoutes: Routes = [
    { path: 'bonitur', component: ScienceHomeComponent, canActivate: [AuthenticationGuard], children: [
    ]}, // },
    { path: 'bonitur/boniturblatt/neu/:formCategoryId', component: FormNewComponent, canActivate: [AuthenticationGuard]},
    { path: 'bonitur/boniturblatt/:id', component: FormEditComponent, canActivate: [AuthenticationGuard]},
    // otherwise redirect to home
];

@NgModule({
  imports: [ RouterModule.forChild(scienceRoutes) ],
  exports: [ RouterModule ]
})
export class ScienceRoutingModule { }
