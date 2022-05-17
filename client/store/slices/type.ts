import { IType } from './../../types/type';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface TypeState {
  types: IType[];
  type: IType | null
}

const initialState: TypeState = {
  types: [],
  type: null
};

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    getTypesByDepartment(state, action) {
      state.types = action.payload;
    },
    getTypeBySlug(state, action) {
      state.type = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.type };
    },
  },
});

export const typeReducer = typeSlice.reducer;
