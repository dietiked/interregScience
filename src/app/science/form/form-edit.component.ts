import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

import { NavigationService } from '../../_services/index';

import { Form, FormService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form.component.css']
})

export class FormEditComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  form: FirebaseObjectObservable<Form>;
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private formService: FormService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => 
      // i) Load header
      this.form = this.formService.formWithKey(params['id']))
      // iii) Load pest values
  }

  /*updateForm() {
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

  }*/

}
