import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IUser } from '../../types/user';

export interface UserState {
  users: IUser[];
  user: IUser | null;
  registerData: IUser | null;
}

const initialState: UserState = {
  users: [],
  user: null,
  registerData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
    login(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    register(state, action: PayloadAction<IUser>) {
      state.registerData = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.user };
    },
  },
});

export const userReducer = userSlice.reducer;
