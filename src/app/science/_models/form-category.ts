export class FormCategory {
  $key: number;
  name: string;
  short: string;
  pests = [];

  initWithFirebaseObject(form: any) {
    this.$key = form.$key;
    this.name = form['name'];
    this.short = form['short'];
    this.pests = form['pests'];
  }

  normalize() {
    return {
      name: this.name,
      short: this.short,
      pests: this.pests
    }
  }
}
