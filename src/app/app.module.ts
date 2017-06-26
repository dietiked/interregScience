import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DDAuthenticationModule } from './dd-authentication/import';
import { PlattformNavigationModule } from './plattform-navigation/import';

import { AppComponent } from './app.component';
import { AppRouting }     from './app.routing';
import { MenuComponent } from './menu/index';
import { NavigationService } from './_services/index';
import { DashboardComponent } from './dashboard/index';
import { AuthComponent } from './auth/index'
import { Error404Component } from './404/index';

import { ScienceModule } from './science/import';

// Firebase configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'interreg'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    DDAuthenticationModule,
    PlattformNavigationModule,
    ScienceModule,
    AppRouting, // Always last!
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    DashboardComponent,
    Error404Component,
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
