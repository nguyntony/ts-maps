import { User } from './User';
import { Company } from './Company';
// Classes have a dual nature in TS. When you create a class you can create an instance of the class as an object. You can ALSO you a class, to refer to that type as well.

export class CustomMap {
  private googleMap: google.maps.Map;

  // you may want to specify the map as an HTMLElement so that ts will understand
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(elementId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addUserMarker(user: User): void {}

  addCompanyMaker(company: Company): void {}
}
