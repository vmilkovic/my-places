import { LOGIN_USER } from './../../utils/constants';
import {
  CREATE_USER,
  UPDATE_USER,
  LOGOUT_USER,
  CHANGE_LANGUAGE,
} from 'utils/constants';

const initialState = {
  id: -1,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  language: '',
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_USER:
      const { createdUser } = actions;
      return {
        id: createdUser.id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        username: createdUser.username,
        email: createdUser.email,
        language: createdUser.language,
      };
    case UPDATE_USER:
      const { updatedUser } = actions;
      return {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        username: updatedUser.username,
        email: updatedUser.email,
        language: updatedUser.language,
      };
    case CHANGE_LANGUAGE:
      const { updatedLanguage } = actions;
      return {
        ...state,
        language: updatedLanguage,
      };
    case LOGIN_USER:
      const { loginUser } = actions;
      return {
        id: loginUser.id,
        firstName: loginUser.firstName,
        lastName: loginUser.lastName,
        username: loginUser.username,
        email: loginUser.email,
        language: loginUser.language,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
