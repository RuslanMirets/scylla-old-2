import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface AlertState {
  success?: string | string[];
  errors?: string | string[];
}

const initialState: AlertState = {
  success: '',
  errors: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    success(state, action) {
      state.success = action.payload;
    },
    errors(state, action) {
      state.errors = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.alert };
    },
  },
});

export const alertReducer = alertSlice.reducer;
