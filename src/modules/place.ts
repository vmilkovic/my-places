import { IPlace } from './../utils/interfaces';

class Place implements IPlace {
  id?: number;
  title: string;
  description: string;
  imageUri: string;
  address: string;
  latitude: number;
  longitude: number;
  isFavorite: boolean;
  userId: number;

  constructor(
    id: number,
    title: string,
    description: string,
    imageUri: string,
    address: string,
    latitude: number,
    longitude: number,
    isFavorite: boolean,
    userId: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUri = imageUri;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.isFavorite = isFavorite;
    this.userId = userId;
  }
}

export default Place;
