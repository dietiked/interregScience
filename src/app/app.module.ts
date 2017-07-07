import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarModule } from './sidebarModule/sidebar.module';
import { AuthModule } from './authModule/auth.module';
import { AuthenticationGuard } from './authModule/index';

import { AppComponent } from './app.component';
import { AppRouting }     from './app.routing';
import { NavigationService } from './_services/index';
import { DashboardComponent } from './dashboardComponent/index';
import { Error404Component } from './404Component/index';

import { ScienceModule } from './scienceModule/import';

// Firebase configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'interreg'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    SidebarModule,
    AuthModule,
    ScienceModule,
    AppRouting, // Always last!
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    Error404Component,
  ],
  providers: [
    NavigationService,
    AuthenticationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
