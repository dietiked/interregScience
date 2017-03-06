import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScienceRoutingModule } from './science.routing';

import { LoaderComponent } from '../_directives/index';

import { FormDefinitionService, FormService } from './index';
import { ScienceHomeComponent } from './index';
import { FormNewComponent } from './index';

// Firebase configuration
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { DDAuthenticationModule } from '../dd-authentication/import';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScienceRoutingModule, // Always last!
    DDAuthenticationModule,
  ],
  declarations: [
    LoaderComponent,
    ScienceHomeComponent,
    FormNewComponent,
  ],
  providers: [
    FormDefinitionService,
    FormService
  ]
})
export class ScienceModule { }
