import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { NavigationService } from '../../_services/index';

import { Form, FormDefinitionService, FormService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form.component.css']
})

export class FormEditComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  form:Form;
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private formDefinitionService: FormDefinitionService,
    private formService: FormService
  ) {
  }

  ngOnInit() {
    // i) Load header
    this.route.params
    .switchMap((params: Params) => 
      this.formService.loadFormWithKey(params['id']))
      .subscribe(form => {
        this.form = form;
        console.log('Form:', form);
    });

    // iii) Load pest values
  }

  updateForm() {
    let normalizedFormHeader = this.form.normalize();
    console.log('update form:', normalizedFormHeader);
    this.formService.updateForm(normalizedFormHeader)
    .then(x => {
    // Save pests
    //this.formService.addPests(this.pests);
      console.log('form pests:', this.form.pests);
      this.navigationService.goToScience();
      }
    );

  }

}
