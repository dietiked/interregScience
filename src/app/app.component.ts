import { Component, OnInit } from '@angular/core';
import { DDAuthenticationService, DDAuthenticationMessage } from './dd-authentication/index';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isUserLoggedIn = false;
  private listTitles: any[];

  constructor(
    private authenticationService: DDAuthenticationService,
  ) {
   this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        this.isUserLoggedIn = authenticationService.isUserLoggedIn();
      }
    );
  }

  ngOnInit() {

  }
}
