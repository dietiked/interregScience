import { Component, Input, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NavigationService } from '../_services/index';
import { ROUTES } from '../routes.config';
import { DDAuthenticationService, DDAuthenticationMessage } from '../dd-authentication/index';

@Component({
  moduleId: module.id,
  selector: 'menu-component',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() title: string;

  isUserLoggedIn = false;
  location: Location;
  private listTitles: any[];

  constructor(
    private authenticationService: DDAuthenticationService,
    private navigationService: NavigationService,
    location: Location
  ) {
   this.location = location;
   this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        this.isUserLoggedIn = authenticationService.isUserLoggedIn();
        if (message.isLogout()) {
          this.navigationService.goToLogin();
        }
      }
    );
  }

  ngOnInit(){
    //this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  signOut(): void {
    //console.log("Password authentication");
    // Validate user credentials with Authentication service
    this.authenticationService.signOut();
  }

  /*getTitle(): string {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 2 );
    }
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }*/
}
