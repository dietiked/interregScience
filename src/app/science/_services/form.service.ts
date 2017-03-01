import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FormService {

  forms;
  currentForm: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire
  ) {
    this.af.auth.subscribe(auth => {
      this.forms = this._getFormsForUser(auth.uid);
    });
  }

  _getFormsForUser(uid) {
    let myForm = this.af.database.list('/forms/'+uid)
    .map(userForms => {
      for (let userForm of userForms) {
        this.af.database.object('/formDefinitions/' + userForm.formDefinition)
        .subscribe(definition => {
          userForm.name = definition.name;
          userForm.short = definition.short;
        })
      }
      return userForms;
    });
    return myForm;
  }

  public getFormForUser() {
    return this.forms;
  }

}
