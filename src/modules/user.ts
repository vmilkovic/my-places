import { SupportedLanguages } from './../utils/types';
import { IUser } from './../utils/interfaces';

class User implements IUser {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  language: SupportedLanguages;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    language: SupportedLanguages,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.language = language;
  }
}

export default User;
