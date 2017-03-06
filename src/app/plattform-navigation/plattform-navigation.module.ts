import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Firebase configuration
import { PlattformNavigationComponent } from './index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    PlattformNavigationComponent
  ],
  providers: [
  ],
  exports: [
    PlattformNavigationComponent
  ]
})
export class PlattformNavigationModule { }
