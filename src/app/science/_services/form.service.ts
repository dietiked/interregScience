import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ScienceConstants } from '../index';

@Injectable()
export class FormService {

  public forms: Observable<any>;
  private uid;
  userForms: FirebaseListObservable<any[]>;
  currentForm: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire
  ) {
    this.af.auth.subscribe(auth => {
      // Download user forms
      this.uid = auth.uid;
      this.userForms = this.af.database.list(ScienceConstants.listFormsForUserWithUid(this.uid));
      // Join user forms with definitions to get definition's full and short name
      this.forms = this._getPublicForms(auth.uid);
    });
  }

  // Join tables "forms" and "formDefinitions" to get full and short name,
  // because forms.formDefinition: number
  _getPublicForms(uid) {
    let myForm = this.userForms
    .map(userForms => {
      console.log('Firebase user forms', userForms);
      // For every user form...
      for (let userForm of userForms) {
        // ... get the form definition ...
        this.af.database.object(ScienceConstants.objectFormDefinitionWithKey(userForm.formDefinition))
        // ... and join definition's full and short name
        .subscribe(definition => {
          userForm.name = definition.name;
          userForm.short = definition.short;
        })
      }
      return userForms;
    });
    console.log('Observable forms', myForm);
    return myForm;
  }

  // Return all user forms
  public getUserForms() {
    return this.forms;
  }

  // Return form with specific ID (for edit)
  public getUserFormWithKey(key: string) {
    let objectPath = ScienceConstants.objectFormForUserWithUidAndKey(this.uid, key);
    this.currentForm = this.af.database.object(objectPath);
    return this.currentForm;
  }

  public updateForm(form: any) {
    this.currentForm.update(form);
  }

  // Add new user form
  public addForm(form: any) {
    this.userForms.push(form);
  }

}
