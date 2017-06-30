import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { ScienceConstants } from '../index';

@Injectable()
export class FormPestService {

  constructor(
    private database: AngularFireDatabase,
    private constants: ScienceConstants
  ) {
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
