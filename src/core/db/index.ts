import { openDatabase } from 'react-native-sqlite-storage';

import User from 'modules/user';
import Place from 'modules/place';

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
        'CREATE TABLE places (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, imageUri TEXT, address TEXT NOT NULL, latitude INTEGER NOT NULL, longitude INTEGER NOT NULL, isFavorite INTEGER DEFAULT 0, userId INTEGER NOT NULL, CONSTRAINT places_FK FOREIGN KEY (userId) REFERENCES users(id));',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
      tx.executeSql(
        'CREATE TABLE users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName TEXT NOT NULL, username TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, language TEXT NOT NULL);',
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
  const {
    title,
    description,
    imageUri,
    address,
    latitude,
    longitude,
    isFavorite,
    userId,
  } = place;
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (title, description, imageUri, address, latitude, longitude, isFavorite, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [
          title,
          description,
          imageUri,
          address,
          latitude,
          longitude,
          isFavorite,
          userId,
        ],
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

export const insertUser = (user: User) => {
  const { firstName, lastName, username, email, password, language } = user;
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (firstName, lastName, username, email, password, language) VALUES (?, ?, ?, ?, ?, ?);',
        [firstName, lastName, username, email, password, language],
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

export const fetchUsers = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users;',
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
