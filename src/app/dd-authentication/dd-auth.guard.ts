import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DDAuthGuard implements CanActivate {

    localStorageIdentifier = 'BeardedBrewUser';

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // ! VALIDATE TOKEN WITH FIREBASE !
        if (this.isUserPersistent()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    public isUserPersistent(): boolean {
      if (localStorage.getItem(this.localStorageIdentifier)) {
        return true;
      }
      return false;
    }

    public login(auth: any): Promise<any> {
      // Save user information in local storage
      localStorage.setItem(this.localStorageIdentifier, JSON.stringify(auth))
      // Return a promise:
      // - resolve if user has been saved in local storage
      // - reject if not
      return new Promise(function(resolve, reject) {
        // Check if local storage has been saved.
        if (this.isUserPersistent()) {
          // If true, resolve
          resolve();
        } else {
          // If false, reject
          reject();
        }
      });
    }

    public logout(): Promise<any> {
      // Remove user information from local storage
      localStorage.removeItem(this.localStorageIdentifier);
      // Return a promise:
      // - resolve if user has been removed from local storage
      // - reject if not
      return new Promise(function(resolve, reject) {
        if (! this.isUserPersistent()) {
          // If false, resolve
          resolve();
        } else {
          // If true, reject
          reject();
        }
      });
    }

}
