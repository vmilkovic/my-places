import { openDatabase } from 'react-native-sqlite-storage';

import type { Place } from 'utils/types';

const db = openDatabase(
  {
    name: 'MyPlaces',
    location: 'Shared',
    createFromLocation: '~MyPlaces.db',
  },
  () => {
    console.log('Database connected!');
  },
  error => {
    console.log('ERROR: ' + error);
  },
);

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const insertPlace = (place: Place) => {
  const { title, imageUri, address, lat, lng } = place;
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);',
        [title, imageUri, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places;',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};
