import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx' ;

import { Form, Pest } from '../index';
import { PestService } from './pest.service';
import { FormService } from './form.service';
import { ScienceConstants } from '../index';
import { JsonToCsvService } from '../../_services/index';

@Injectable()
export class DownloadService {

    constructor(
        private formService: FormService,
        private pestService: PestService,
        private converter: JsonToCsvService,
    ) {}

    public downloadForms () {
        this.formService.forms()
        .subscribe(forms => {
            let csv = this.formHeaderCsv();
            let numberOfForms = forms.length;
            let formCount = 0;
            for (let form of forms) {
                this.formService.formWithKey(form.$key)
                .subscribe(form => {
                    console.log('My form', form);  
                    this.pestService.pestsForFormWithKey(form.$key)
                    .subscribe(pests => {
                        csv = csv.concat(this.formContentCsv(form, pests));  
                        if (formCount == numberOfForms) {
                            console.log('Count', formCount, numberOfForms);
                            this.download(csv);
                        }       
                        console.log('Form with pests', csv); 
                    });
                });
                formCount += 1;
            }
        });
        console.log('Download everything');
    }

    public downloadFormWithKey (key: string) {
        console.log('Download form with key', key);
        this.formService.formWithKey(key)
        .subscribe(form => {
            console.log('My form', form);  
            this.pestService.pestsForFormWithKey(key)
            .subscribe(pests => {
                let csv = this.formHeaderCsv().concat(this.formContentCsv(form, pests));    
                this.download(csv);     
                console.log('Form with pests', csv); 
            })
        })
    }

    private download(csv: string) {
        var blob = new Blob([csv], {type: 'text/csv'});
        var url= window.URL.createObjectURL(blob);
        window.open(url, '_blank');
    }

    private formHeaderCsv(): string {
        let formHeader = 'Datum; Formular; Formular_kurz; Ort; Anlage; Person; Sorte1; Sorte2; Sorte3; Sorte4; Sorte5; OrganismusId; Organismus; Hauptorganismus; Kontrolle; Bonitur1; Bonitur2; Bonitur3; Bonitur4; Bonitur5; Total; Befall;\n';
        return formHeader;
    }

    private formContentCsv(form: Form, pests: Pest[]): string {
        let formContent = '';
        let formInfo = '';
        formInfo = formInfo.concat(
            form['date'], ';', 
            form['name'], ';', 
            form['short'], ';', 
            form['location'], ';', 
            form['site'], ';', 
            form['person'], ';',
            form['variety1'], ';',
            form['variety2'], ';',
            form['variety3'], ';',
            form['variety4'], ';',
            form['variety5'], ';',
        );
        for (let pest of pests) {
            let pestInfo = '';
            pestInfo = pestInfo.concat(
                pest['pestId'], ';', 
                pest['name'], ';', 
                pest['main'].toString(), ';', 
                pest['control'].toString(), ';', 
                pest['v1'].toString(), ';',
                pest['v2'].toString(), ';',
                pest['v3'].toString(), ';',
                pest['v4'].toString(), ';',
                pest['v5'].toString(), ';',
                pest['total'].toString(), ';', 
                pest['percentage'].toString(), ';',
            );
            formContent = formContent.concat(formInfo, pestInfo, '\n');
        }
        return formContent;
    }
}
