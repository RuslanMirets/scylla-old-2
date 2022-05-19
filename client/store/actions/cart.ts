import { AppDispatch } from '..';
import { IProduct } from '../../types/product';
import { alertSlice } from '../slices/alert';
import { cartSlice } from './../slices/cart';

export const addToCart = (product: IProduct, cart: IProduct[]) => async (dispatch: AppDispatch) => {
  try {
    if (product.inStock === 0) return dispatch(alertSlice.actions.errors('Товара нет в наличии'));

    const check = cart.every((item: any) => {
      return item.id !== product.id;
    });

    if (!check) {
      dispatch(alertSlice.actions.success(''));
      dispatch(alertSlice.actions.errors('Товар уже добавлен в корзину'));
    } else {
      dispatch(cartSlice.actions.addToCart([...cart, { ...product, quantity: 1 }]));
      dispatch(alertSlice.actions.errors(''));
      dispatch(alertSlice.actions.success('Товар добавлен в корзину'));
    }
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
