import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FormDefinitionService } from '../index';
import { Form } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})

export class FormNewComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  formHeader = new Form();
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private formDefinitionService: FormDefinitionService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.formDefinitionService.getFormDefinitionWithKey(params['formCategoryId']))
    .subscribe(formDefinition => {
      this.formHeader.initWithDefinition(formDefinition);
      this.isFormHeaderLoading = false;
    });

    this.route.params
    .switchMap((params: Params) => this.formDefinitionService.getPestsForFormCategoryWithKey(params['formCategoryId']))
    .subscribe(pests => {
      this.pests = pests;
      this.arePestsLoading = false;
    });
  }

}
