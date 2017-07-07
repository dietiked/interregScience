
import { Component, OnInit } from '@angular/core';
import { ROUTES } from './routes.config';
import { AuthenticationService } from '../authModule/index';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public username: string;

    constructor(
        private authService: AuthenticationService,
    ) {}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.authService.userInfo().subscribe(userInfo => {
            this.username = userInfo['firstName'] + ' ' + userInfo['familyName'];
        });
    }
}