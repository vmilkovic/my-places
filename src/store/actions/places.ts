import { insertPlace, fetchPlaces, changePlace } from 'core/db';

import { ADD_PLACE, LOAD_PLACES, UPDATE_PLACE } from 'utils/constants';
import Place from 'modules/place';

export const addPlace = (place: Place) => {
  return async (dispatch: any) => {
    try {
      const dbResult = await insertPlace(place);
      const newPlace = {
        ...place,
        id: dbResult.insertId,
      };

      dispatch({ type: ADD_PLACE, addedPlace: newPlace });
    } catch (err) {
      throw err;
    }
  };
};

export const updatePlace = (place: Place) => {
  return async (dispatch: any) => {
    try {
      await changePlace(place);
      dispatch({ type: UPDATE_PLACE, updatedPlace: place });
    } catch (err) {
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch: any) => {
    try {
      const dbResult = await fetchPlaces();
      const places = [];
      for (let i = 0; i < dbResult.rows.length; i++) {
        places.push(dbResult.rows.item(i));
      }
      dispatch({ type: LOAD_PLACES, loadedPlaces: places });
    } catch (err) {
      throw err;
    }
  };
};
