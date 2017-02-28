import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FormDefinitionService } from '../index';
import { FormCategory } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})

export class FormNewComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  formHeader = {};
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private formDefinition: FormDefinitionService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.formDefinition.getFormDefinitionWithKey(params['formCategoryId']))
    .subscribe(formHeader => {
      this.formHeader = formHeader;
      this.isFormHeaderLoading = false;
    });

    this.route.params
    .switchMap((params: Params) => this.formDefinition.getPestsForFormCategoryWithKey(params['formCategoryId']))
    .subscribe(pests => {
      this.pests = pests;
      this.arePestsLoading = false;
    });
  }

}
