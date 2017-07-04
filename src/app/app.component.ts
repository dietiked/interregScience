import { Component, OnInit } from '@angular/core';
import { AuthenticationService, AuthenticationMessage } from './authModule/index';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isUserLoggedIn = false;
  private listTitles: any[];

  constructor(
    private authenticationService: AuthenticationService,
  ) {
   this.authenticationService.authState().subscribe(
      (message: AuthenticationMessage) => {
        this.isUserLoggedIn = authenticationService.isUserLoggedIn();
      }
    );
  }

  ngOnInit() {

  }
}
