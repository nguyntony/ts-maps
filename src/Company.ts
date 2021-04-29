import faker from 'faker';

export class Company {
  // define the type annotations of the props that the class will have
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  // after you define the props and the type annotations, we need to initialize it with a constructor fn
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
