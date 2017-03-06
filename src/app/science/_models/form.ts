export class Form {
  formDefinition: string;
  name: string;
  short: string;
  _date = new Date();
  _year = this._date.getFullYear();
  _month = this._date.getMonth() + 1;
  _day = this._date.getDay() + 1;
  date =  this._year + '-' + this._month + '-' + this._day;
  location = '';
  person = '';
  site = '';
  variety1 = '';
  variety2 = '';
  variety3 = '';
  variety4 = '';
  variety5 = '';
  remarks = '';
  treatments = '';

  public initWithFirebaseObject(form: any) {
  }

  public initWithDefinition(definition: any) {
    this.formDefinition = definition.$key;
    this.name = definition.name;
    this.short = definition.short;
    console.log(this.date);
  }

  public normalize() {
    return {
      formDefinition: this.formDefinition,
      date: this.date,
      location: this.location,
      person: this.person,
      remarks: this.remarks,
      site: this.site,
      variety1: this.variety1,
      variety2: this.variety2,
      variety3: this.variety3,
      variety4: this.variety4,
      variety5: this.variety5,

    }
  }
}
