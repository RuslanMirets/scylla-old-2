import { IDepartment } from './../../types/department';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface DepartmentState {
  departments: IDepartment[];
  department: IDepartment | null;
}

const initialState: DepartmentState = {
  departments: [],
  department: null,
};

export const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    getDepartments(state, action) {
      state.departments = action.payload;
    },
    getDepartmentBySlug(state, action) {
      state.department = action.payload;
    },
    getDepartmentByType(state, action) {
      state.department = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.department };
    },
  },
});

export const departmentReducer = departmentSlice.reducer;
