export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export interface IPlace {
  title: string;
  imageUri: string;
  address: string;
  lat: number;
  lng: number;
}
