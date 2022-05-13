import { departmentSlice } from './../slices/department';
import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';

export const getDepartments = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('department');
    dispatch(departmentSlice.actions.getDepartments(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getDepartment = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`department/slug/${slug}`);
    dispatch(departmentSlice.actions.getDepartment(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
