export class Form {
  formDefinition: string;
  name: string;
  short: string;
  date: string;
  location: string;
  person: string;
  site: string;
  variety1: string;
  variety2: string;
  variety3: string;
  variety4: string;
  variety5: string;
  remarks: string;
  treatments: string;

  public initWithFirebaseObject(form: any) {
  }

  public initWithDefinition(definition: any) {
    this.formDefinition = definition.$key;
    this.name = definition.name;
    this.short = definition.short;
  }

  public normalize() {
    return {
      formCategory: this.formDefinition,
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
