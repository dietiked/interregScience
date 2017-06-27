export class Form {
  $key: string;
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
  pests = [];

  public initWithFirebaseObject(form: any) {
    this.$key = form.$key;
    this.formDefinition = form.formDefinition;
    this.name = form.name;
    this.short = form.short;
    this.date = form.date;
    this.location = form.location ?  form.location : '';
    this.person = form.person ?  form.person : '';
    this.site = form.site ?  form.site : '';
    this.variety1 = form.variety1 ?  form.variety1 : '';
    this.variety2 = form.variety2 ?  form.variety2 : '';
    this.variety3 = form.variety3 ?  form.variety3 : '';
    this.variety4 = form.variety4 ?  form.variety4 : '';
    this.variety5 = form.variety5 ?  form.variety5 : '';
    this.remarks = form.remarks ?  form.remarks : '';
    this.treatments = form.treatments ?  form.treatments : '';
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
      name: this.name,
      short: this.short,
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
