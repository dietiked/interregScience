import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService, UserCredential, AuthenticationMessage } from '../index';
import { NavigationService } from '../../_services/navigation.service';

@Component({
    moduleId: module.id,
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    @Input()
    user = new UserCredential();
    //user = {firstName: '', familyName: '', email: '', password: '', passwordRepeat: ''};

    constructor(
        private authService: AuthenticationService,
        private navService: NavigationService,
    ) { }

    ngOnInit() { }

    public signup() {
        this.authService.signUp(this.user)
        .then(_ => {
            this.navService.goToDashboard();
        });
    }
}