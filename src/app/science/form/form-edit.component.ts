import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

import { NavigationService } from '../../_services/index';

import { FormService, PestService } from '../index';
import { Form, Pest } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form.component.css']
})

export class FormEditComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  form: Form;
  pests: Pest[];

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private formService: FormService,
    private pestService: PestService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => 
      // i) Load header
      this.formService.formWithKey(params['id']))
      .subscribe(form => {
        this.form = form;
      });
      // iii) Load pest values
     this.route.params
    .switchMap((params: Params) => 
      // i) Load header
      this.pestService.pestsForFormWithKey(params['id']))
      .subscribe(pests => {
        this.pests = pests;
      });
  }

  update() {
    this.formService.updateForm(this.form)
    .then(formResult => {
      // Save pests
      this.pestService.update(this.pests, this.form.$key);
      console.log('Success:', this.form);
      //this.navigationService.goToScience();
      }
    );

  }

}
