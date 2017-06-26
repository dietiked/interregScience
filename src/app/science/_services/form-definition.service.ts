import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ScienceConstants } from '../index';
import { FormDefinition } from '../index';

@Injectable()
export class FormDefinitionService {

  public formDefinitions: FirebaseListObservable<any[]>;
  currentDefinition: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private database: AngularFireDatabase,
    private constants: ScienceConstants
  ) {
    this.formDefinitions = this.database.list(ScienceConstants.DEF_FORMS);
  }

  public getFormDefinitionWithKey(key: number): FirebaseObjectObservable<FormDefinition> {
    this.currentDefinition = this.database.object(ScienceConstants.objectFormDefinitionWithKey(key));
    return this.currentDefinition;
  }

  public getPestsForFormCategoryWithKey(key) {
    let pests = this.database.list(ScienceConstants.listPestsForDefinitionWithKey(key))
    .map((items) => {
      for (let item of items) {
        this.database.object(ScienceConstants.objectPestWithKey(item.$key))
        .subscribe(pest => {
          item.name = pest.name;
        });
      }
      return items;
    })
    return pests;
  }

}
