import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from 'modules/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  },
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      const { id, firstName, lastName, username, email } = action.payload;

      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
