import { IPlace } from './../utils/interfaces';

class Place implements IPlace {
  title: string;
  imageUri: string;
  address: string;
  lat: number;
  lng: number;

  constructor(
    title: string,
    imageUri: string,
    address: string,
    lat: number,
    lng: number,
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }
}

export default Place;
