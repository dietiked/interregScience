import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDefinitionService, FormService } from '../index';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  moduleId: module.id,
  templateUrl: './science-home.component.html'
})

export class ScienceHomeComponent implements OnInit  {

  formDefinitions: FirebaseListObservable<any[]>;
  forms: FirebaseListObservable<any[]>;
  areDefinitionsLoading = true;
  areFormsLoading = true;

  constructor(
    private formDefinitionService: FormDefinitionService,
    private formService: FormService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Show form definitions once finish loading
    this.formDefinitions = this.formDefinitionService.formDefinitions;
    this.formDefinitions.subscribe(observer => {
      this.areDefinitionsLoading = false;
    })

  // Show user forms once finish loading
   /*this.formService.getForms()
    .subscribe(forms => {
      this.areFormsLoading = false;
      console.log('Forms', this.forms);
    })*/
  }

  newForm(key) {
    this.router.navigate(['science', 'forms', 'new', key]);
  }

}
