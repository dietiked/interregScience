interface FormInterface {
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
}

export class Form implements FormInterface {
  pests = [];

  constructor(
    public formDefinition, 
    public name, public short,
    public date =  '',
    public location = '',
    public person = '',
    public site = '',
    public variety1 = '',
    public variety2 = '',
    public variety3 = '',
    public variety4 = '',
    public variety5 = '',
    public remarks = '',
    public treatments = ''    
    ) {

  }
}
