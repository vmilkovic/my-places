import Place from 'modules/place';
import {
  ADD_PLACE,
  LOAD_FAVORITE_PLACES,
  LOAD_PLACES,
  UPDATE_PLACE,
} from 'utils/constants';

const initialState = {
  list: [],
  favorites: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOAD_PLACES:
      const { loadedPlaces } = actions;
      return { ...state, list: loadedPlaces };
    case ADD_PLACE:
      const { addedPlace } = actions;
      const newPlace = new Place(
        addedPlace.id,
        addedPlace.title,
        addedPlace.description,
        addedPlace.imageUri,
        addedPlace.address,
        addedPlace.latitude,
        addedPlace.longitude,
        false,
        addedPlace.userId,
      );
      return {
        ...state,
        list: state.list.concat(newPlace),
      };
    case UPDATE_PLACE:
      const { updatedPlace } = actions;
      const placeIndex = state.list.findIndex(
        place => place.id === updatedPlace.id,
      );
      const newList = state.list;
      newList[placeIndex] = updatedPlace;
      return {
        ...state,
        list: newList,
      };
    case LOAD_FAVORITE_PLACES:
      const { favoritePlaces } = actions;
      return {
        ...state,
        favorites: favoritePlaces,
      };
    default:
      return state;
  }
};
