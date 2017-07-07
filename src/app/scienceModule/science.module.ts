import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScienceRoutingModule } from './science.routing';

import { LoaderComponent } from '../_directives/index';
import { JsonToCsvService } from '../_services/index';

import { ScienceConstants } from './index';
import { ScienceHomeComponent } from './index';
import { FormService, PestService, DownloadService } from './index';
import { FormNewComponent, FormEditComponent } from './index';

import { AuthModule } from '../authModule/import';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScienceRoutingModule,
    AuthModule,
  ],
  declarations: [
    LoaderComponent,
    ScienceHomeComponent,
    FormNewComponent,
    FormEditComponent
  ],
  providers: [
    JsonToCsvService,
    DownloadService,
    ScienceConstants,
    FormService,
    PestService
  ]
})
export class ScienceModule { }
