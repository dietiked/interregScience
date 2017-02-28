export class Form {
  formDefinition: string;
  name: string;
  short: string;
  date: string;
  location: string;
  person: string;
  remarks: string;
  site: string;
  pests = [];

  public initWithFirebaseObject(form: any) {
  }

  public initWithDefinition(definition: any) {
    this.formDefinition = definition.$key;
    this.name = definition.name;
    this.short = definition.short;
    this.pests = definition.pests;
  }

  public normalize() {
    return {
      formCategory: this.formDefinition,
      date: this.date,
      location: this.location,
      person: this.person,
      remarks: this.remarks,
      site: this.site,
    }
  }
}
