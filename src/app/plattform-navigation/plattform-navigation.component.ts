import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { APPS } from './index';

@Component({
  moduleId: module.id,
  selector: 'plattform-navigation',
  templateUrl: './plattform-navigation.component.html',
  styleUrls: ['./plattform-navigation.component.css']
})

export class PlattformNavigationComponent {

  @Input() title: string;
  segments: Observable<any[]>;
  apps = APPS;
  currentApp: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(x => {
      this._getBreadcrumbPaths();
      this._getCurrentApp();
    })
  }

  _getBreadcrumbPaths() {
    this.segments = this.route.url.map(urlSegments => {
      var paths: Array<any> = new Array<any>();
      var cumulativeLink: Array<string> = ['//'];
      urlSegments.forEach(function(urlSegment, index) {
        let path = urlSegment.path;
        if (index > 0) {
          cumulativeLink.push(urlSegment.path)
          let link = cumulativeLink.slice();
          paths.push({
            path: path,
            link: link
          });
        }
      });
      return paths;
    })
  }

  _getCurrentApp() {
    this.route.url.subscribe(urlSegments => {
      this.currentApp = urlSegments[0]['path'];
    });
  }

}
