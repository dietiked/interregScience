import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormCategoryService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './science-home.component.html'
})

export class ScienceHomeComponent {

  formCategories = <any>[];
  isLoading = true;

  constructor(
    private formService: FormCategoryService,
    private router: Router
  ) {
    this.formCategories = formService.getFormCategories()
    this.formCategories.subscribe(x => {
      this.isLoading = false;
    })
  }

  newForm(key) {
    this.router.navigate(['science', 'forms', 'new', key]);
  }

}
