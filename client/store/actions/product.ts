import { productSlice } from './../slices/product';
import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';

export const getProductsByDepartment = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`product/department/${slug}`);
    dispatch(productSlice.actions.getProductsByDepartment(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getProductsByCategory = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`product/category/${slug}`);
    dispatch(productSlice.actions.getProductsByCategory(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getProductById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`product/${id}`);
    dispatch(productSlice.actions.getProductById(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
