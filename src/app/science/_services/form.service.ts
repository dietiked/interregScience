import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
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
    private af: AngularFireAuth,
    private database: AngularFireDatabase
  ) {
    this.af.authState.subscribe(user => {
      // Get UID
      this.uid = user.uid;
    });
 }

  ngOnInit() {
    // Download user forms
      // Get UID
      console.log('UID', this.uid);
      // Get forms
      this.forms = this.database.list(ScienceConstants.listFormsForUserWithUid(this.uid));
      this.userPests = this.database.list(ScienceConstants.listPestsForUserWithUid(this.uid));
  }

  // Return form with specific ID (for edit)
  public getUserFormWithKey(key: string) {
    let objectPath = ScienceConstants.objectFormForUserWithUidAndKey(this.uid, key);
    this.currentForm = this.database.object(objectPath);
    return this.currentForm;
  }

  public getForms():Observable<any> {
    return this.forms;
  }

  public updateForm(form: any) {
    this.currentForm.update(form);
  }

  // Add new user form
  public addForm(form: any) {
    this.forms.push(form);
  }

  // Pests
  // args: pests = []
  public addPests(pests: any) {
    
  }

  // Return the pest counts for a specific form
  public getPestsForFormWithKey() {

  }

}
