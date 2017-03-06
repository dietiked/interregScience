import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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
    private authenticationService: DDAuthenticationService,
    private alertService: DDAlertService,
    private router: Router
  ) {
    this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        if (message.isLogin()) { // User is logged in
          this.router.navigate(['dashboard']);
        } else if (message.isError()) { // Wrong username or password
          this.alertService.error(message.message);
          this.isLoading = false;
          console.log('Display message: wrong username or password');
        }
      }
    );
  }

  ngOnInit(): void {
  }

  signinWithPassword(): void {
    this.isLoading = true;
    // Validate user credentials with Authentication service
    this.authenticationService.signInWithPassword(this.user.email, this.user.password)
  }


}
