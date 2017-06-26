import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DDAlertService } from '../../dd-alert/index';
import { DDAuthenticationService, DDAuthenticationMessage } from '../index';

@Component({
  moduleId: module.id,
  selector: 'dd-login',
  templateUrl: './dd-login.component.html',
  styleUrls: ['./dd-login.component.css']
})

export class DDLoginComponent implements OnInit {

  @Input()
  user = {email: 'test@test.com', password: 'test666'};

  isLoading = false;

  constructor(
    // Init component with Authentication Service
    private authenticationService: DDAuthenticationService,
    // Alert Service
    private alertService: DDAlertService,
    // and router for redirecting user after login
    private router: Router
  ) {
    // Subscribe to the authentication service with authState()
    // The authentication service returns an authentication message
    // when the user try to log in
    this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        if (message.isLogin()) { // User is logged in
          this.router.navigate(['dashboard']); // Navigate to dashboard
        } else if (message.isError()) { // Wrong username or password
          this.alertService.error(message.message); // Display an error on the UI with the alert service
          this.isLoading = false; // Stop the loading wheel
          console.log('Display message: wrong username or password');
        }
      }
    );
  }

  ngOnInit(): void {
  }

  // Outlet connected to the "Sign in" button
  signinWithPassword(): void {
    this.isLoading = true;
    // Validate user credentials with Authentication service
    this.authenticationService.signInWithPassword(this.user.email, this.user.password)
  }


}
