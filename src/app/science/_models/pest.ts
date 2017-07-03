interface PestInterface {
  name: string;
  pestId: string;
  main: boolean;
  control: number;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  total: number;
  percentage: number;
}

export class Pest implements PestInterface {

  public constructor(
    public name = '',
    public pestId = '',
    public main = false,
    public control= 0,
    public v1= 0,
    public v2= 0,
    public v3= 0,
    public v4= 0,
    public v5= 0,
    public total= 0,
    public percentage= 0,
  ) {
  }
}
