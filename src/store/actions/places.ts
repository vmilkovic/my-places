import { insertPlace, fetchPlaces } from 'core/db';

import { ADD_PLACE } from 'utils/constants';
import Place from 'modules/place';

export const addPlace = (place: Place) => {
  return async (dispatch: any) => {
    try {
      const dbResult = await insertPlace(place);
      console.log(dbResult);
      // dispatch({
      //   type: ADD_PLACE,
      // });
    } catch (err) {
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch: any) => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch();
    } catch (err) {
      throw err;
    }
  };
};
