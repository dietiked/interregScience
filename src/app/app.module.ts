import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting }     from './app.routing';
import { AuthenticationModule } from './authentication/import';
import { MenuComponent } from './menu/index';
import { NavigationService } from './_services/index';
import { DashboardComponent } from './dashboard/index';

import { ScienceModule } from './science/import';

// Firebase configuration
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
  apiKey: "AIzaSyDfrnnRtOCl96Hd6MR0n0g-_z8-5yLayeM",
  authDomain: "interregscience-dev.firebaseapp.com",
  databaseURL: "https://interregscience-dev.firebaseio.com",
  storageBucket: "interregscience-dev.appspot.com",
  messagingSenderId: "105767761255"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    AuthenticationModule,
    ScienceModule,
    AppRouting, // Always last!
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
