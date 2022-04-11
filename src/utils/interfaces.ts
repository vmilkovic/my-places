import { PickerImage, GeolocationCoordiates } from './types';
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export interface IPlace {
  title: string;
  description: string;
  imageUri: string;
  address: string;
  lat: number;
  lng: number;
}

export interface ImagePickerResponse {
  didCancel?: boolean;
  assets?: PickerImage[];
}
