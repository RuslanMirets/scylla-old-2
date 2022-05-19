import { cartReducer } from './slices/cart';
import { categoryReducer } from './slices/category';
import { productReducer } from './slices/product';
import { departmentReducer } from './slices/department';
import { alertReducer } from './slices/alert';
import { userReducer } from './slices/user';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { typeReducer } from './slices/type';
import { nextReduxCookieMiddleware } from 'next-redux-cookie-wrapper';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      alert: alertReducer,
      department: departmentReducer,
      type: typeReducer,
      category: categoryReducer,
      product: productReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ['cart'],
        }),
      ),
  });
}

export const store = makeStore();

// const makeStore = wrapMakeStore(() =>
//   createStore(
//     reducer,
//     composeWithDevTools(
//       applyMiddleware(
//         nextReduxCookieMiddleware({
//           subtrees: ['cart'],
//         }),
//         thunk,
//       ),
//     ),
//   ),
// );

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
