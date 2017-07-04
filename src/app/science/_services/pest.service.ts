import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pest } from '../_models/pest';
import { ScienceConstants } from '../index';

@Injectable()
export class PestService {

  _pestsForForm: FirebaseListObservable<Pest[]>;
  _pestsForFormDefinition: Observable<Pest[]>;

  constructor(
    private database: AngularFireDatabase,
  ) {
  }

  // Pests for new form
  public pestsForFormDefinitionWithKey(key:string): Observable<Pest[]> {
    this._pestsForFormDefinition = this.database.list(ScienceConstants.pestsForFormDefinitionWithKey(key))
    .map((pests) => {
      for (let pest of pests) {
        this.database.object(ScienceConstants.pestWithKey(pest.$key))
        .subscribe(pestDefinition => {
          pest.name = pestDefinition.name;
        });
      }
      return pests;
    });
    return this._pestsForFormDefinition;
  }

  // Pests for filled forms
  public pestsForFormWithKey(key: string): FirebaseListObservable<Pest[]> {
    this._pestsForForm = this.database.list(ScienceConstants.pestsForFormWithKey(key));
    return this._pestsForForm
  }

  public add(pests: Pest[], formId: string): Observable<any> {
    let observable = Observable.create(observer => {
      if (!this._pestsForForm) {
          this.pestsForFormWithKey(formId);
        }
      for (let pest of pests) {
        pest.pestId = pest['$key'];
        this._pestsForForm.push(pest);
      }
      observer.next();
    });
    return observable;
  }

  public update(pests:any, formId:string) {
    console.log('Update pests', pests);
    for (let pest of pests) {
      let pestRef = this.database.object(ScienceConstants.pestWithKeyForFormWithKey(pest.$key, formId));
      pestRef.update(pest);
    }
  }
}
