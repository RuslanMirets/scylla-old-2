import { IType } from './../../types/type';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface TypeState {
  types: IType[];
}

const initialState: TypeState = {
  types: [],
};

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    getTypesByDepartment(state, action) {
      state.types = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.type };
    },
  },
});

export const typeReducer = typeSlice.reducer;
