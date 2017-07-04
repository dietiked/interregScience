import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../_services/navigation.service';

@Component({
  moduleId: module.id,
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.css']
})

export class Error404Component implements OnInit {

  constructor(
    private navigation: NavigationService
  ) {

  }

  ngOnInit() {

  }

  backToLogin() {
    this.navigation.goToLogin();
  }

  backToDashboard() {
    this.navigation.goToDashboard();
  }

}
