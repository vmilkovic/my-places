export const FALLBACK_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'hr'];
export const IMAGE_SELECTION_LIMIT = 1;
export const GOOGLE_STATIC_MAP_URL =
  'https://maps.googleapis.com/maps/api/staticmap';
export const GOOGLE_GEOCODE_API_URL =
  'https://maps.googleapis.com/maps/api/geocode/json';
export const VUB_LOCATION = {
  latitude: 45.8997256,
  longitude: 16.8418307,
  address: 'Trg Eugena Kvaternika 4, 43000, Bjelovar',
};

export const CREATE_PLACES_TABEL_QUERY =
  'CREATE TABLE IF NOT EXISTS places (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, imageUri TEXT, address TEXT NOT NULL, latitude INTEGER NOT NULL, longitude INTEGER NOT NULL, isFavorite INTEGER DEFAULT 0, userId INTEGER NOT NULL, CONSTRAINT places_FK FOREIGN KEY (userId) REFERENCES users(id));';
export const CREATE_USERS_TABLE_QUERY =
  'CREATE TABLE IF NOT EXISTS users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName TEXT NOT NULL, username TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, language TEXT NOT NULL);';

export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACES = 'LOAD_PLACES';
export const UPDATE_PLACE = 'UPDATE_PLACE';
export const LOAD_FAVORITE_PLACES = 'LOAD_FAVORITE_PLACES';
