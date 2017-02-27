import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FormCategoryService } from '../index';
import { FormCategory } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})

export class FormNewComponent {

  isFormHeaderLoading = true;
  arePestsLoading = true;
  formHeader = {};
  pests = [];

  constructor(
    private route: ActivatedRoute,
    private formService: FormCategoryService
  ) {
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.formService.getFormCategoryWithKey(params['formCategoryId']))
    .subscribe(formHeader => {
      this.formHeader = formHeader;
      this.isFormHeaderLoading = false;
    });

    this.route.params
    .switchMap((params: Params) => this.formService.getPestsForFormCategoryWithKey(params['formCategoryId']))
    .subscribe(pests => {
      this.pests = pests;
      this.arePestsLoading = false;
      console.log('Pests', pests);
    });
  }

}
