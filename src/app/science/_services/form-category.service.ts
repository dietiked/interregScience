import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormCategory } from '../index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FormCategoryService {

  formCategories: FirebaseListObservable<any[]>;
  currentForm: FirebaseObjectObservable<any>;

  constructor(
    protected router: Router,
    private af: AngularFire
  ) {
    this.formCategories = this.af.database.list('/formCategories');
  }

  public getFormCategories(): FirebaseListObservable<any[]> {
    return this.formCategories;
  }

  public getFormCategoryWithKey(key: number): FirebaseObjectObservable<FormCategory> {
    this.currentForm = this.af.database.object('/formCategories/' + key);
    return this.currentForm;
  }

  public getPestsForFormCategoryWithKey(key: number) {
    let pests = this.af.database.list('/formCategories/' + key + '/pests')
    .map((items) => {
      for (let item of items) {
        console.log('Item', item);
        this.af.database.object('/pests/' + item.$key).subscribe(pest => item.name = pest.name);
      }
      return items;
    })
    return pests;
  }

}
