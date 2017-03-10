import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FormDefinitionService, FormService } from '../index';
import { Form } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form.component.css']
})

export class FormEditComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  formHeader = new Form();
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private formDefinitionService: FormDefinitionService,
    private formService: FormService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.formService.getUserFormWithKey(params['id']))
    .subscribe(form => {
      this.formHeader.initWithFirebaseObject(form);
      this.isFormHeaderLoading = false;
      console.log('Form:', form);
    });

    /*this.route.params
    .switchMap((params: Params) => this.formDefinitionService.getPestsForFormCategoryWithKey(params['id']))
    .subscribe(pests => {
      this.pests = pests;
      this.arePestsLoading = false;
    });*/
  }

  updateForm() {
    let normalizeFormHeader = this.formHeader.normalize();
    console.log('update form:', normalizeFormHeader);
    this.formService.updateForm(normalizeFormHeader)
  }

}
