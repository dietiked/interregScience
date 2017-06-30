export class FormDefinition {
  $key: number;
  name: string;
  short: string;
  pests = [];

  initWithFirebaseObject(form: any) {
    this.$key = form.$key;
    this.name = form['name'];
    this.short = form['short'];
  }

  normalize() {
    return {
      name: this.name,
      short: this.short,
      pests: this.pests
    }
  }
}
