export class FormPest {
  $key: string;
  name: string;
  control: number;
  variety1: number;
  variety2: number;
  variety3: number;
  variety4: number;
  variety5: number;

  public constructor(definition) {
    console.log('Pest constructor', definition);
    this.$key = definition.$key;
    this.name = definition.name;
    this.control = 0;
    this.variety1 = 0;
    this.variety2 = 0;
    this.variety3 = 0;
    this.variety4 = 0;
    this.variety5 = 0;
  }

}
