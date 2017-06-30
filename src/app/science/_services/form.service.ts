import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DDAuthenticationService } from '../../dd-authentication/index';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Form } from '../index';
import { FormPestService } from './form-pest.service';
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
    private database: AngularFireDatabase,
    private formPestService: FormPestService
 ) {
    this.authenticationService.user.subscribe(user => {
      // Get UID
      this.uid = user.uid;
    });
 }

  ngOnInit() {
  }

  public loadForms(): Observable<Form[]> {
    let observable = Observable.create((observer) => {
      this.forms = this.database.list(ScienceConstants.listFormsForUserWithUid(this.uid), {query: {orderByChild: 'date'}});
      this.forms.subscribe(forms => {
        observer.next(forms);
      });
    })

    return observable;
  }

  private getFormWithKey(key: string): FirebaseObjectObservable<any> {
    this.currentForm = this.database.object(ScienceConstants.objectFormForUserWithUidAndKey(this.uid, key));
    return this.currentForm;
  }
  
  public loadFormWithKey(key: string): Observable<Form> {

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

  }

  public updateForm(form: any) {
    return this.currentForm.update(form);
  }

  // Add new user form
  public addForm(form: any) {
    let save = this.forms.push(form);
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
