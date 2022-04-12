import { ADD_PLACE, SET_PLACES } from 'utils/constants';

const initialState = {
  list: [],
  favorites: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_PLACES:
      return { ...state };
    case ADD_PLACE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
