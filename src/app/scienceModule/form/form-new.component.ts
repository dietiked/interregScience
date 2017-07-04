import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

import { NavigationService } from '../../_services/index';

import { FormService, PestService } from '../index';
import { Form, Pest } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form.component.css']
})

export class FormNewComponent {

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
    .subscribe((params: Params) => {
      let formCategoryId = params['formCategoryId'];
      this.formService.formForDefinitionWithKey(formCategoryId)
      .subscribe(form => {
          this.form = form;
          //this.form.formDefinition = formCategoryId;
        }
      );
      this.pestService.pestsForFormDefinitionWithKey(formCategoryId)
      .subscribe(pests => {
        this.pests = pests;
      })
    });
  }

  saveForm() {
    this.formService.add(this.form)
    .then(result => {
      this.pestService.add(this.pests, result.key)
      .subscribe(result1 => {
        this.navigationService.goToScience();
      })
    });
    /*// Save form header
    let normalizeform = this.form.normalize();
    console.log('save form:', normalizeform);
    this.formService.addForm(normalizeform)
    .then(x => {
    // Save pests
    //this.formService.addPests(this.pests);
      console.log('form pests:', this.form.pests);
      this.navigationService.goToScience();
      }
    );*/
  }

}