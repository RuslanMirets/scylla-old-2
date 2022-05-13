import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';
import { typeSlice } from '../slices/type';

export const getTypeByDepartment = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`type/department/${slug}`);
    dispatch(typeSlice.actions.getTypeByDepartment(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
