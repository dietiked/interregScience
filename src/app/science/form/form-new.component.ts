import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FormDefinitionService, FormService } from '../index';
import { Form, FormPest } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form.component.css']
})

export class FormNewComponent {

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
    .switchMap((params: Params) => this.formDefinitionService.getFormDefinitionWithKey(params['formCategoryId']))
    .subscribe(formDefinition => {
      this.formHeader.initWithDefinition(formDefinition);
      this.isFormHeaderLoading = false;
    });

    this.route.params
    .switchMap((params: Params) => this.formDefinitionService.getPestsForFormCategoryWithKey(params['formCategoryId']))
    .subscribe(pests => {
      pests.forEach(pest => {
        var newPest = new FormPest(pest);
        this.pests.push(newPest)
        console.log('this is a pest', pest);
      });
      console.log(pests);
      this.arePestsLoading = false;
    });
  }

  saveForm() {
    // Save form header
    let normalizeFormHeader = this.formHeader.normalize();
    console.log('save form:', normalizeFormHeader);
    this.formService.addForm(normalizeFormHeader)
    // Save pests
    //this.formService.addPests(this.pests);
    console.log('form pests:', this.pests);
  }

}
