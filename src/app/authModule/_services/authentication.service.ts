import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationMessage } from '../index';

@Injectable()
export class AuthenticationService {

  // A subscriber of the authentication state
  private authStateSubscriber = new Subject<any>();
  // A authentication message ready to be sent
  private message = new AuthenticationMessage();
  // The user
  user: Observable<firebase.User>;

  constructor(
    // The AngularFire authentication service
    private afAuth: AngularFireAuth,
    // The router for redirecting user
    private router: Router,
  ) {
    this.user = afAuth.authState;
    // Constantly observe the firebase authentication state
    // and forward any change to the manageAuthState function
     // (never manage state changes in the constructor!)
    this.user.subscribe((user) => {
      this.manageAuthState(user);
    });
  }

  public authState(): Observable<any> {
    return this.authStateSubscriber.asObservable();
  }

  // A simple function that check if user is logged in
  public isUserLoggedIn() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }

  // Check if authentication response ist valid or not
  private manageAuthState(user: firebase.User, url?:String) {
    let message = new AuthenticationMessage();
    if (user) {
      message.loginMessage();
     } else {
      message.logoutMessage();
     }
    this.authStateSubscriber.next(message);
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
    } else if (
      error['code'] == 'auth/network-request-failed'
    ) {
      var errorMsg = 'Connection error: please, reload the page';
      this.message.errorMessage(errorMsg);
      this.authStateSubscriber.next(this.message);     
    }
  }

  public signInWithPassword(username: string, password: string) {
    console.log('Sign in');
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
    .catch(error => {
      this.authenticationRequestDidFail(error);
    });
  }

  public signOut() {
    this.afAuth.auth.signOut()
    .catch((error) => {
      this.authenticationRequestDidFail(error);
    });
  }

  getUsername(): String {
    return ''
  }
}
