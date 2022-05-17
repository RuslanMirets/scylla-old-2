import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';
import { typeSlice } from '../slices/type';

export const getTypesByDepartment = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`type/department/${slug}`);
    dispatch(typeSlice.actions.getTypesByDepartment(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getTypeBySlug = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`type/slug/${slug}`);
    dispatch(typeSlice.actions.getTypeBySlug(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
