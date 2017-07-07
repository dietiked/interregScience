import { Injectable } from '@angular/core';

@Injectable()
export class JsonToCsvService {

  constructor(
  ) {
  }

  public objectToCsv(obj:any, fields:string[], separator:string = ';'): string {
    let csv = '';
    for (let key in obj) {
        if (fields.indexOf(key) > -1) {
            console.log('OK', key);
            csv = csv.concat(obj[key], separator);
        }
    }
    console.log('Finish string', csv);
    return csv;
  }

}
