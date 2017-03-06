import { Component, OnInit } from '@angular/core';

import { DDAlertService } from './dd-alert.service';

@Component({
    moduleId: module.id,
    selector: 'dd-alert',
    templateUrl: 'dd-alert.component.html'
})

export class DDAlertComponent {
    message: any;

    constructor(private alertService: DDAlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
