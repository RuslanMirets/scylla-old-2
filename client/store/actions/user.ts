import { alertSlice } from './../slices/alert';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { AppDispatch } from '..';
import { IUser } from '../../types/user';
import { getAPI, postAPI } from '../../utils/fetchData';
import { userSlice } from '../slices/user';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('user');
    dispatch(userSlice.actions.getUsers(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const login = (data: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', data);
    setCookie(null, 'scyllaAuthToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(userSlice.actions.login(response.data));
    dispatch(alertSlice.actions.errors(''));
    dispatch(alertSlice.actions.success('Успешная авторизация'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const register = (data: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/register', data);
    dispatch(userSlice.actions.register(response.data));
    dispatch(alertSlice.actions.errors(''));
    dispatch(alertSlice.actions.success('Успешная регистрация'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'scyllaAuthToken', null);
    dispatch(userSlice.actions.logout());
    dispatch(alertSlice.actions.success('Выход из системы'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getMe = (ctx: any) => async (dispatch: AppDispatch) => {
  try {
    const { scyllaAuthToken } = parseCookies(ctx);
    const response = await getAPI('user/profile', scyllaAuthToken);
    dispatch(userSlice.actions.login(response.data));
  } catch (error) {
    console.log('Unauthorized');
  }
};
