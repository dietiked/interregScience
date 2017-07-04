import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing';
import { AuthenticationService, AuthenticationMessage } from './index';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        FormsModule,
        AuthRoutingModule // Always last!
    ],
    declarations: [
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
