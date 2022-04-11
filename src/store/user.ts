import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'core/i18n';

import User from 'modules/user';

import { SupportedLanguages } from 'utils/types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    firstName: '',
    lastName: '',
    username: '',
    email: '1',
    language: 'en',
  },
  reducers: {
    loginUser(state, action: PayloadAction<User>) {
      const { username, password } = action.payload;
      console.log('LOGIN USER', action.payload);
      state.id = 1;
      state.firstName = 'Vedran';
      state.lastName = 'Milković';
      state.username = 'Milky';
      state.email = 'vmilkovic@vub.hr';
      state.language = 'en';
    },
    logoutUser(state) {
      state.id = null;
      state.firstName = '';
      state.lastName = '';
      state.username = '';
      state.email = '';
      state.language = '';
    },
    registerUser(state, action: PayloadAction<User>) {
      const { firstName, lastName, username, email, password, repeatPassword } =
        action.payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;

      i18n.changeLanguage(state.language);
      console.log('Register User', action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const { id, firstName, lastName, username, email, password } =
        action.payload;

      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;

      console.log('Update User', action.payload);
    },
    changeLanguage(state, action: PayloadAction<SupportedLanguages>) {
      state.language = action.payload;
      console.log('LANGUAGE UPDATED', action);
    },
  },
});

export const {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
  changeLanguage,
} = userSlice.actions;
export default userSlice.reducer;
