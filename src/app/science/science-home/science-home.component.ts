import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormDefinitionService, FormService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './science-home.component.html'
})

export class ScienceHomeComponent {

  formDefinitions = <any>[];
  areDefinitionsLoading = true;
  forms = <any>[];
  areFormsLoading = true;

  constructor(
    private formDefinitionService: FormDefinitionService,
    private formService: FormService,
    private router: Router
  ) {
    this.formDefinitions = formDefinitionService.getFormDefinitions()
    this.formDefinitions.subscribe(x => {
      this.areDefinitionsLoading = false;
    })

    this.formService.getUserForms()
    .subscribe(forms => {
      this.forms = forms;
      this.areFormsLoading = false;
      console.log('Forms', this.forms);
    })
  }

  newForm(key) {
    this.router.navigate(['science', 'forms', 'new', key]);
  }

}
