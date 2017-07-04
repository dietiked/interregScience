import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.routing';
import { SigninComponent, SignupComponent } from './index';

@NgModule({
    imports: [
        AuthRoutingModule // Always last!
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
    ],
    providers: [],
    exports: [],
})
export class AuthModule { }
