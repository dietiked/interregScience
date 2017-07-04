import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from '../index';
import * as firebase from 'firebase/app';

@Injectable()
export class DDAuthGuard implements CanActivate {

    localStorageIdentifier = 'InterregScienceUser';

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authenticationService.user.map(user => {
          return this.authenticationService.isUserLoggedIn();        
        });
    }
}
