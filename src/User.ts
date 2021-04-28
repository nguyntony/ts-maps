import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // note that we did not technical initalize the object yet above which is why the syntax must be like this, NOT like this: this.location.lat = 188
      lat: parseFloat(faker.address.latitude()), // faker.address.latitude() returns string which is why this is one want to return a number to satisfy our type annotation above.
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
