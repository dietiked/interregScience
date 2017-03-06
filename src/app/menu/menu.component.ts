import { Component } from '@angular/core';
import { NavigationService } from '../_services/index';
import { DDAuthenticationService, DDAuthenticationMessage } from '../dd-authentication/index';

@Component({
  moduleId: module.id,
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {

  isUserLoggedIn = false;

  constructor(
    private authenticationService: DDAuthenticationService,
    private navigationService: NavigationService
  ) {
    this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        this.isUserLoggedIn = authenticationService.isUserLoggedIn();
        if (message.isLogout()) {
          this.navigationService.goToLogin();
        }
      }
    );
  }

  signOut(): void {
    console.log("Password authentication");
    // Validate user credentials with Authentication service
    this.authenticationService.signOut();
  }
}
