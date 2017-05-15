import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ScienceConstants } from '../index';
import { FormDefinition } from '../index';

@Injectable()
export class FormDefinitionService {

  formDefinitions: FirebaseListObservable<any[]>;
  currentDefinition: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire,
    private constants: ScienceConstants
  ) {
    this.formDefinitions = this.af.database.list(ScienceConstants.DEF_FORMS);
  }

  public getFormDefinitions(): FirebaseListObservable<any[]> {
    return this.formDefinitions;
  }

  public getFormDefinitionWithKey(key: number): FirebaseObjectObservable<FormDefinition> {
    this.currentDefinition = this.af.database.object(ScienceConstants.objectFormDefinitionWithKey(key));
    return this.currentDefinition;
  }

  public getPestsForFormCategoryWithKey(key) {
    let pests = this.af.database.list(ScienceConstants.listPestsForDefinitionWithKey(key))
    .map((items) => {
      for (let item of items) {
        this.af.database.object(ScienceConstants.objectPestWithKey(item.$key))
        .subscribe(pest => {
          item.name = pest.name;
        });
      }
      return items;
    })
    return pests;
  }

}
