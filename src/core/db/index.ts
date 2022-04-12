import { SupportedLanguages } from './../../utils/types';
import { openDatabase } from 'react-native-sqlite-storage';

import User from 'modules/user';
import Place from 'modules/place';
import {
  CREATE_PLACES_TABEL_QUERY,
  CREATE_USERS_TABLE_QUERY,
} from 'utils/constants';

const db = openDatabase(
  {
    name: 'MyPlaces',
    location: 'default',
    createFromLocation: '~db/MyPlaces.db',
  },
  () => {
    console.info('Database connected!');
  },
  error => {
    console.error('Database error: ' + error);
  },
);

export const databaseInit = () => {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        CREATE_USERS_TABLE_QUERY,
        [],
        () => {
          resolve();
        },
        (err, _) => {
          reject(err);
        },
      );
      tx.executeSql(
        CREATE_PLACES_TABEL_QUERY,
        [],
        () => {
          resolve();
        },
        (err, _) => {
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
        'INSERT INTO users (firstName, lastName, username, email, password, language) VALUES (?, ?, ?, ?, ?, ?);',
        [firstName, lastName, username, email, password, language],
        (_, result) => {
          resolve(result);
        },
        (err, _) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const changeUser = (user: User) => {
  const { id, firstName, lastName, email, password, language } = user;

  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET firstName=?, lastName=?, email=?, password=?, language=? WHERE id=?;',
        [firstName, lastName, email, password, language, id],
        (_, result) => {
          resolve(result);
        },
        (err, _) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const changeLanguage = (
  userId: number,
  language: SupportedLanguages,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET language=? WHERE id=?;',
        [language, userId],
        (_, result) => {
          resolve(result);
        },
        (err, _) => {
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
        (err, _) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const fetchUser = (username: string, password: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE users.username = ? AND users.password = ?;',
        [username, password],
        (_, result) => {
          resolve(result);
        },
        (err, _) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const insertPlace = (place: Place) => {
  const { title, description, imageUri, address, latitude, longitude, userId } =
    place;

  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO places (title, description, imageUri, address, latitude, longitude, userId) VALUES (?, ?, ?, ?, ?, ?, ?);',
        [title, description, imageUri, address, latitude, longitude, userId],
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

export const changePlace = (place: Place) => {
  const {
    id,
    title,
    description,
    address,
    imageUri,
    latitude,
    longitude,
    isFavorite,
  } = place;

  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE places SET title=?, description=?, address=?, imageUri=?, latitude=?, longitude=?, isFavorite=? WHERE id=?;',
        [
          title,
          description,
          address,
          imageUri,
          latitude,
          longitude,
          isFavorite,
          id,
        ],
        (_, result) => {
          resolve(result);
        },
        (err, _) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const fetchPlaces = (userId: number) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places WHERE userId=?;',
        [userId],
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

export const fetchFavoritePlaces = (userId: number) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places WHERE isFavorite=1 AND userId=?;',
        [userId],
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
