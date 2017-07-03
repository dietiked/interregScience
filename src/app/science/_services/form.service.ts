import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DDAuthenticationService } from '../../dd-authentication/index';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Form } from '../index';
import { PestService } from './pest.service';
import { ScienceConstants } from '../index';

@Injectable()
export class FormService implements OnInit {

  private uid;
  _forms: FirebaseListObservable<Form[]>;
  public userPests: FirebaseListObservable<any[]>;
  _currentForm: FirebaseObjectObservable<Form>;

  _formDefinitions: FirebaseListObservable<Form[]>;
  public newForm:Form;
  _currentDefinition: FirebaseObjectObservable<Form>;
  _newForm: FirebaseObjectObservable<Form>;

  constructor(
    protected router: Router,
    private authenticationService: DDAuthenticationService,
    private database: AngularFireDatabase,
    private formPestService: PestService
 ) {
    this.authenticationService.user.subscribe(user => {
      // Get UID
      this.uid = user.uid;
    });
 }

  ngOnInit() {
  }

  // API on form definitions (readonly)
  public formDefinitions(): FirebaseListObservable<Form[]> {
    this._formDefinitions = this.database.list(ScienceConstants.DEF_FORMS);
    return this._formDefinitions;
  }

  public formDefinitionWithKey(key: string): FirebaseObjectObservable<Form> {
    this._currentDefinition = this.database.object(ScienceConstants.objectFormDefinitionWithKey(key));
    return this._currentDefinition;
  }

  public formForDefinitionWithKey(key: string): FirebaseObjectObservable<Form> {
    this._newForm = this.database.object(ScienceConstants.objectFormDefinitionWithKey(key));
    return this._newForm;
  }

  // API on filled forms
  public forms(): FirebaseListObservable<Form[]> {
    this._forms = this.database.list(ScienceConstants.formsForUserWithUid(this.uid), {query: {orderByChild: 'date'}});
    return this._forms;
  }

  public formWithKey(key: string): FirebaseObjectObservable<any> {
    this._currentForm = this.database.object(ScienceConstants.formWithKeyForUserWithUid(key, this.uid));
    return this._currentForm;
  }
  
  /*public loadFormWithKey(key: string): Observable<Form> {

    let observable = Observable.create((observer) => {
      let loadCounter = 0;
      // Instantiate an empty form
      let form = new Form();
      // Get form definition and wait for response
      this.getFormWithKey(key)
      // When loading is finish, append information to empty form
      .subscribe(dbForm => {
        form.initWithFirebaseObject(dbForm);
        // Get pests information
        this.formPestService.getPestsForFormCategoryWithKey(form.formDefinition, key)
        .subscribe(pests => {
          form.pests = pests;
          observer.next(form)
        });
      });
    });

    return observable;

  }*/

  public updateForm(form: any) {
    return this._currentForm.update(form);
  }

  // Add new user form
  public add(form: any) {
    if (! this._forms) {
      this.forms();
    }
    let save = this._forms.push(form);
    return save;
  }

  // Pests
  // args: pests = []
  public addPests(pests: any) {
    
  }

  // Return the pest counts for a specific form
  public getPestsForFormWithKey() {

  }

}
