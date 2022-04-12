import { SupportedLanguages } from './../../utils/types';
import { insertUser, changeUser, changeLanguage, fetchUser } from 'core/db';

import {
  CREATE_USER,
  UPDATE_USER,
  CHANGE_LANGUAGE,
  LOGOUT_USER,
  LOGIN_USER,
} from './../../utils/constants';
import User from 'modules/user';

export const createUser = (user: User) => {
  return async (dispatch: any) => {
    try {
      const dbResult = await insertUser(user);
      dispatch({
        type: CREATE_USER,
        createdUser: {
          id: dbResult.insertId,
          ...user,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};

export const updateUser = (user: User) => {
  return async (dispatch: any) => {
    try {
      user.password = user.newPassword;
      await changeUser(user);
      dispatch({
        type: UPDATE_USER,
        updatedUser: user,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const updateLanguage = (
  userId: number,
  language: SupportedLanguages,
) => {
  return async (dispatch: any) => {
    try {
      await changeLanguage(userId, language);
      dispatch({
        type: CHANGE_LANGUAGE,
        updatedLanguage: language,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const loginUser = (username: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const dbResult = await fetchUser(username, password);
      for (let i = 0; i < dbResult.rows.length; i++) {
        const user = dbResult.rows.item(i);
        dispatch({ type: LOGIN_USER, loginUser: user });
      }
    } catch (err) {
      throw err;
    }
  };
};
