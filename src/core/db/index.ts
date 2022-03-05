import * as SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MyPlaces',
    location: 'default',
    createFromLocation: '~MyPlaces.db',
  },
  () => {},
  error => {
    console.log('ERROR: ' + error);
  },
);

export default db;
