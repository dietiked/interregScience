import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.routing';
import { AuthenticationService, AuthenticationMessage } from './index';
import { SigninComponent, SignupComponent } from './index';

@NgModule({
    imports: [
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
