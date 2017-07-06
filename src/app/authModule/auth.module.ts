import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing';
import { AuthenticationService, AuthenticationMessage } from './index';
import { PasswordCheckDirective } from './_directives/password-check.directive';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AuthRoutingModule // Always last!
    ],
    declarations: [
        PasswordCheckDirective,
        SigninComponent,
        SignupComponent,
    ],
    providers: [
        AuthenticationMessage,
        AuthenticationService,
    ],
    exports: [],
})
export class AuthModule { }
