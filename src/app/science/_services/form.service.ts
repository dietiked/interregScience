import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FormService {

  public forms: Observable<any>;
  userForms: FirebaseListObservable<any[]>;
  currentForm: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire
  ) {
    this.af.auth.subscribe(auth => {
      this.userForms = this.af.database.list('/forms/' + auth.uid);
      this.forms = this._getPublicForms(auth.uid);
    });
  }

  _getPublicForms(uid) {
    let myForm = this.userForms
    .map(userForms => {
      console.log('Firebase user forms', userForms);
      for (let userForm of userForms) {
        this.af.database.object('/formDefinitions/' + userForm.formDefinition)
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

  public getUserForms() {
    return this.forms;
  }

  public addForm(form: any) {
    this.userForms.push(form);
  }

}
