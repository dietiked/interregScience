import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { NavigationService } from '../../_services/index';

import { FormDefinitionService, FormService } from '../index';
import { Form, FormPest } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form.component.css']
})

export class FormNewComponent {

  form:Form;

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private formDefinitionService: FormDefinitionService,
    private formService: FormService
  ) {
  }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.formDefinitionService.loadFormForDefinitionWithKey(params['formCategoryId'])
      .subscribe(form => {
        this.form = form;
        console.log('x', form);
        }
      );
    });
  }

  saveForm() {
    // Save form header
    let normalizeform = this.form.normalize();
    console.log('save form:', normalizeform);
    this.formService.addForm(normalizeform)
    .then(x => {
    // Save pests
    //this.formService.addPests(this.pests);
      console.log('form pests:', this.form.pests);
      this.navigationService.goToScience();
      }
    );
  }

}
