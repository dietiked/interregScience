import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormDefinition } from '../index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FormDefinitionService {

  formDefinitions: FirebaseListObservable<any[]>;
  currentDefinition: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire
  ) {
    this.formDefinitions = this.af.database.list('/formDefinitions');
  }

  public getFormDefinitions(): FirebaseListObservable<any[]> {
    return this.formDefinitions;
  }

  public getFormDefinitionWithKey(key: number): FirebaseObjectObservable<FormDefinition> {
    this.currentDefinition = this.af.database.object('/formDefinitions/' + key);
    return this.currentDefinition;
  }

  public getPestsForFormCategoryWithKey(key: number) {
    let pests = this.af.database.list('/formDefinitions/' + key + '/pests')
    .map((items) => {
      for (let item of items) {
        this.af.database.object('/pests/' + item.$key)
        .subscribe(pest => {
          item.name = pest.name
        });
      }
      return items;
    })
    return pests;
  }

}
