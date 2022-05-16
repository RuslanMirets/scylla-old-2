import { categoryReducer } from './slices/category';
import { productReducer } from './slices/product';
import { departmentReducer } from './slices/department';
import { alertReducer } from './slices/alert';
import { userReducer } from './slices/user';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { typeReducer } from './slices/type';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      alert: alertReducer,
      department: departmentReducer,
      type: typeReducer,
      category: categoryReducer,
      product: productReducer,
    },
  });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore);
