import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScienceRoutingModule } from './science.routing';

import { LoaderComponent } from '../_directives/index';

import { ScienceConstants } from './index';
import { ScienceHomeComponent } from './index';
import { FormDefinitionService, FormService } from './index';
import { FormNewComponent, FormEditComponent } from './index';

import { DDAuthenticationModule } from '../dd-authentication/import';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScienceRoutingModule,
    DDAuthenticationModule,
  ],
  declarations: [
    LoaderComponent,
    ScienceHomeComponent,
    FormNewComponent,
    FormEditComponent
  ],
  providers: [
    ScienceConstants,
    FormDefinitionService,
    FormService,
  ]
})
export class ScienceModule { }
