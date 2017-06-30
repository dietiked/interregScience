import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { FormPest } from '../_models/form-pest';
import { ScienceConstants } from '../index';

@Injectable()
export class FormPestService {

  constructor(
    private database: AngularFireDatabase,
    private constants: ScienceConstants
  ) {
  }

  // If valuesForFormId --> get form values for pests
  public getPestsForFormCategoryWithKey(formDefinitionId:string, valuesForFormId?:string) {
    // Discover, which pests are available for this form definition
    let pests = this.database.list(ScienceConstants.listPestsForDefinitionWithKey(formDefinitionId))
    .map((pests:FormPest[]) => {
      // Iterate through the form pests
      for (let pest of pests) {
        // Get pest definition
        this.database.object(ScienceConstants.objectPestWithKey(pest.$key))
        .subscribe(pestDefinition => {
          var formPest = new FormPest(pestDefinition);
          pest.name = pestDefinition.name;
          if (valuesForFormId) {
            this.getValuesForPestInForm(formPest.$key, valuesForFormId)
            .subscribe(values => {
              pest.control = values.control;
              pest.v1 = values.v1;
              pest.v2 = values.v2;
              pest.v3 = values.v3;
              pest.v4 = values.v4;
              pest.v5 = values.v5;
            });
          }
        });
      }
      return pests;
    })
    return pests;
  }

  getValuesForPestInForm(pestId, formId) {
    return this.database.object(ScienceConstants.objectPestValuesForFormAndPest(pestId, formId))
  }

}
