import { User } from './User';
import { Company } from './Company';
// Classes have a dual nature in TS. When you create a class you can create an instance of the class as an object. You can ALSO use a class, to refer to that type as well.

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMaker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
