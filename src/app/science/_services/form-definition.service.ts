import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ScienceConstants } from '../index';
import { FormDefinition, Form } from '../index';
import { FormPestService } from './form-pest.service';

@Injectable()
export class FormDefinitionService {

  public formDefinitions: FirebaseListObservable<any[]>;
  public newForm:Form;
  currentDefinition: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private database: AngularFireDatabase,
    private constants: ScienceConstants,
    private formPestService: FormPestService
  ) {
    this.formDefinitions = this.database.list(ScienceConstants.DEF_FORMS);
  }

  private getFormDefinitionWithKey(key: string) {
    return this.database.object(ScienceConstants.objectFormDefinitionWithKey(key))
  }

  public loadFormForDefinitionWithKey(key: string): Observable<Form> {

    let observable = Observable.create((observer) => {
      let loadCounter = 0;
      // Instantiate an empty form
      let newForm = new Form();
      // Get form definition and wait for response
      this.getFormDefinitionWithKey(key)
      // When loading is finish, append information to empty form
      .subscribe(formDefinition => {
        newForm.initWithDefinition(formDefinition);
        loadCounter += 1;
        if (loadCounter == 2) { observer.next(newForm) }
      });
      // At the same time, get pests information for form
      this.formPestService.getPestsForFormCategoryWithKey(key)
      // 
      .subscribe(pests => {
        newForm.pests = pests;
        loadCounter += 1;
        if (loadCounter == 2) { observer.next(newForm) }
      });
    });

    return observable;

  }

}
