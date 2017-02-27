import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationRouting } from './index';
import { AuthenticationService, AuthGuard } from './index';
import { LoginComponent } from './login/index';
import { AlertComponent, AlertService } from './alert/index';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AuthenticationRouting,
   ],
  declarations: [
    LoginComponent,
    AlertComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    AlertService
  ]
})
export class AuthenticationModule { }
