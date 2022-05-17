import { ICategory } from './../../types/category';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface CategoryState {
  categories: ICategory[];
  category: ICategory | null;
}

const initialState: CategoryState = {
  categories: [],
  category: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoriesByType(state, action) {
      state.categories = action.payload;
    },
    getCategoryBySlug(state, action) {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.category };
    },
  },
});

export const categoryReducer = categorySlice.reducer;
