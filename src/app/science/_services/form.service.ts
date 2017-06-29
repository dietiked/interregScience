import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DDAuthenticationService } from '../../dd-authentication/index';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ScienceConstants } from '../index';

@Injectable()
export class FormService implements OnInit {

  private uid;
  public forms: FirebaseListObservable<any[]>;
  public userPests: FirebaseListObservable<any[]>;
  public currentForm: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private authenticationService: DDAuthenticationService,
    private database: AngularFireDatabase
  ) {
    this.authenticationService.user.subscribe(user => {
      // Get UID
      this.uid = user.uid;
      this.forms = this.database.list(ScienceConstants.listFormsForUserWithUid(this.uid), {query: {orderByChild: 'date'}});
      this.userPests = this.database.list(ScienceConstants.listPestsForUserWithUid(this.uid));
    });
 }

  ngOnInit() {
  }

  // Return form with specific ID (for edit)
  public getUserFormWithKey(key: string) {
    let objectPath = ScienceConstants.objectFormForUserWithUidAndKey(this.uid, key);
    this.currentForm = this.database.object(objectPath);
    return this.currentForm;
  }

  public updateForm(form: any) {
    return this.currentForm.update(form);
  }

  // Add new user form
  public addForm(form: any) {
    return this.forms.push(form);
  }

  // Pests
  // args: pests = []
  public addPests(pests: any) {
    
  }

  // Return the pest counts for a specific form
  public getPestsForFormWithKey() {

  }

}
