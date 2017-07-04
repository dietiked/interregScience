import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    console.log('Dashboard loaded');
  }

  goTo(url: string): void {
    this.navigationService.goTo(url);
  }

}
