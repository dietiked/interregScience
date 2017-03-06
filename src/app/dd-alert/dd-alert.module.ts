import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DDAlertComponent, DDAlertService } from './index';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
   ],
  declarations: [
    DDAlertComponent,
  ],
  providers: [
    DDAlertService
  ],
  exports: [
    DDAlertComponent
  ]
})
export class DDAlertModule { }
