import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthGuard, AuthenticationMessage } from './index';

@Injectable()
export class AuthenticationService {

  private authStateSubscriber = new Subject<any>();
  private message = new AuthenticationMessage();

  constructor(
    private af: AngularFire,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.af.auth.subscribe((auth) => {
      // Constantly observe authentication state
      console.log('Authentication service listen to subscription', auth);
      this.manageAuthState(auth);
    });
  }

  public authState(): Observable<any> {
    return this.authStateSubscriber.asObservable();
  }

  public isUserLoggedIn(): boolean {
    return this.authGuard.isUserPersistent();
  }

  // Check if authentication response ist valid or not
  private manageAuthState(auth: any, url?:String) {
    console.log('Manage user state', auth);
    if (auth) {
      // User is logged in
      // Tell Auth Guard to save user in local storage...
      this.authGuard.login(auth)
      .catch((error) => {
        console.log('Auth guard cannot save to local storage');
      })
      .then((success)=>{
        // ... and inform subscriber that login was successfull
        this.message.loginMessage();
        this.authStateSubscriber.next(this.message);
      }
    );
    } else {
      // User logged out
      // Tell Auth Guard to remove user from local storage...
      this.authGuard.logout()
      .catch((error) => {
        console.log('Auth guard cannot remove from local storage');
      })
      .then((success)=>{
        // ... and inform subscriber that logout was successfull
        this.message.logoutMessage();
        this.authStateSubscriber.next(this.message);
      });
    }
  }

  // Error handling if authentication request fails
  private authenticationRequestDidFail(error: any) {
    console.log('Authentication service error', error);
    if (
      error['code'] == 'auth/user-not-found' ||
      error['code'] == 'auth/wrong-username'
    ) {
      var errorMsg = 'Wrong username or password';
      this.message.errorMessage(errorMsg);
      this.authStateSubscriber.next(this.message);
    }
  }

  public signInWithPassword(username: String, password: String) {
    var credentials = {email: username, password: password}
    this.af.auth.login(credentials)
    .catch(error => {
      this.authenticationRequestDidFail(error);
    });
  }

  public signInWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
    .catch((error) => {
      this.authenticationRequestDidFail(error);
    })
  }

  public signOut() {
    this.af.auth.logout()
    .catch((error) => {
      this.authenticationRequestDidFail(error);
    });
  }

  getUsername(): String {
    return ''
  }
}
