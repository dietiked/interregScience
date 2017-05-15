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
    // i) Load header
    this.route.params
    .switchMap((params: Params) => this.formService.getUserFormWithKey(params['id']))
    .subscribe(form => {
      this.formHeader.initWithFirebaseObject(form);
      this.isFormHeaderLoading = false;
      console.log('Form:', form);
      console.log('Form Header:', this.formHeader);

      // ii) Load list of pests for this form category
      this.formDefinitionService.getPestsForFormCategoryWithKey(this.formHeader.formDefinition)
      .subscribe(pests => {
        this.pests = pests;
        this.arePestsLoading = false;
        console.log('Form definition:', this.formHeader);
        console.log('Pests:', pests);
      });
    });

    // iii) Load pest values
  }

  updateForm() {
    let normalizedFormHeader = this.formHeader.normalize();
    console.log('update form:', normalizedFormHeader);
    this.formService.updateForm(normalizedFormHeader)
  }

}
