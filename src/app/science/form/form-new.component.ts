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

  isFormLoading = true;
  arePestsLoading = true;
  form = new Form();

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
      this.formDefinitionService.getFormDefinitionWithKey(params['formCategoryId'])
      .subscribe(x => {
        this.form = this.formDefinitionService.newForm
        this.isFormLoading = false;
        this.arePestsLoading = false;
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
