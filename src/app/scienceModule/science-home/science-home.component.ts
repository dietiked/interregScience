import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService, Form, DownloadService } from '../index';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  moduleId: module.id,
  templateUrl: './science-home.component.html',
  styleUrls: ['./science-home.component.css']
})

export class ScienceHomeComponent implements OnInit  {

  formDefinitions: FirebaseListObservable<Form[]>;
  forms: FirebaseListObservable<Form[]>;
  areDefinitionsLoading = true;
  areFormsLoading = true;

  constructor(
    private formService: FormService,
    private router: Router,
    private downloadService: DownloadService
  ) {
  }

  ngOnInit() {
    // Show form definitions once finish loading
    this.formDefinitions = this.formService.formDefinitions();
    this.formDefinitions.subscribe(_ => {
      this.areDefinitionsLoading = false;
    })

  // Show user forms once finish loading
    this.forms = this.formService.forms();
    this.forms.subscribe(forms => {
      this.areFormsLoading = false;
    })
  }

  newForm(key) {
    this.router.navigate(['science', 'forms', 'new', key]);
  }

  public download(formId?: string) {
    if (!formId) {
      this.downloadService.downloadForms();
    } else {
      this.downloadService.downloadFormWithKey(formId);
    }
  }

}
