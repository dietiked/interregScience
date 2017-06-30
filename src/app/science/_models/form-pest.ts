export class FormPest {
  $key: string;
  name: string;
  control: number;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;

  public constructor(definition) {
    console.log('Pest constructor', definition);
    this.$key = definition.$key;
    this.name = definition.name;
    this.control = 0;
    this.v1 = 0;
    this.v2 = 0;
    this.v3 = 0;
    this.v4 = 0;
    this.v5 = 0;
  }

  public normalize() {
    return {
      control: this.control,
      v1: this.v1,
      v2: this.v2,
      v3: this.v3,
      v4: this.v4,
      v5: this.v5,
    }
  }

}
