import { PickerImage, SupportedLanguages } from './types';
export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  language?: SupportedLanguages;
}

export interface IPlace {
  id?: number;
  title: string;
  description: string;
  imageUri: string;
  address: string;
  latitude: number;
  longitude: number;
  isFavorite: boolean;
  userId: number;
}

export interface ImagePickerResponse {
  didCancel?: boolean;
  assets?: PickerImage[];
}
