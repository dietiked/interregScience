import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DDAuthenticationService, DDAuthGuard } from './index';
import { DDLoginComponent } from './index';
import { DDAlertModule } from '../dd-alert/import';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    DDAlertModule
   ],
  declarations: [
    DDLoginComponent,
  ],
  providers: [
    DDAuthenticationService,
    DDAuthGuard,
  ],
  exports: [
    DDLoginComponent,
  ]
})
export class DDAuthenticationModule { }
