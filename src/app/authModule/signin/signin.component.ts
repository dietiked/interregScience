import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthenticationMessage } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './signin.component.html'
})

export class SigninComponent  implements OnInit {

  @Input()
  user = {email: 'test@test.com', password: 'test666'};

  isLoading = false;

  constructor(
    // Init component with Authentication Service
    private authenticationService: AuthenticationService,
    // Alert Service
    //private alertService: DDAlertService,
    // and router for redirecting user after login
    private router: Router
  ) {
    // Subscribe to the authentication service with authState()
    // The authentication service returns an authentication message
    // when the user try to log in
    this.authenticationService.authState().subscribe(
      (message: AuthenticationMessage) => {
        if (message.isLogin()) { // User is logged in
          this.router.navigate(['dashboard']); // Navigate to dashboard
        } else if (message.isError()) { // Wrong username or password
          //this.alertService.error(message.message); // Display an error on the UI with the alert service
          this.isLoading = false; // Stop the loading wheel
          console.log('Display message: wrong username or password');
        }
      }
    );
  }

  ngOnInit(): void {
    this.authenticationService.signOut();
  }

  // Outlet connected to the "Sign in" button
  signinWithPassword(): void {
    this.isLoading = true;
    // Validate user credentials with Authentication service
    this.authenticationService.signInWithPassword(this.user.email, this.user.password)
  }
}
