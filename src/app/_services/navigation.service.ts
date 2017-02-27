import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(
    protected router: Router
  ) {

  }

  public goTo(url: string) {
    this.router.navigate([url]);
  }
  // Plattform navigation
  public goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  public goToLogin() {
    this.router.navigate(['/login']);
  }
}
