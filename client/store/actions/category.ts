import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';
import { categorySlice } from './../slices/category';

export const getCategoriesByType = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`category/department/${slug}`);
    dispatch(categorySlice.actions.getCategoriesByType(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
