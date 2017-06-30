export class FormPest {
  $key: string;
  name: string;
  control = 0;
  v1 = 0;
  v2 = 0;
  v3 = 0;
  v4 = 0;
  v5 = 0;
  total = 0;
  percentage = 0;

  public constructor(definition?) {
    this.$key = definition.$key;
    this.name = definition.name;
  }

  public initWithPestDefinition(definition) {
    this.$key = definition.$key;
    this.name = definition.name
  }

  public setValues(values) {
    values.control ? this.control = values.control : this.control;
    values.v1 ? this.v1 = values.v1 : this.v1;
    values.v2 ? this.v2 = values.v2 : this.v2;
    values.v3 ? this.v3 = values.v3 : this.v3;
    values.v4 ? this.v4 = values.v4 : this.v4;
    values.v5 ? this.v5 = values.v5 : this.v5;
    this.total = this.v1 + this.v2 + this.v3 + this.v4 + this.v5;
    this.percentage = this.total / this.control * 100;
  }

  public normalize() {
    return {
      control: this.control,
      v1: this.v1,
      v2: this.v2,
      v3: this.v3,
      v4: this.v4,
      v5: this.v5,
      total: this.total,
      percentage: this.percentage
    }
  }

}
