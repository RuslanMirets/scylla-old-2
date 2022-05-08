import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { Api } from '../../../utils/api';
import { parseCookies, setCookie } from 'nookies';
import { setUserData } from '../../../store/slices/user';

interface IProps {
  onClose: () => void;
}

export const LoginForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: any) => {
    try {
      const data = await Api().user.login(dto);
      setCookie(null, 'scyllaAuthToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      dispatch(setUserData({ ...dto, ...data }));
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField type="text" label="Email" name="email" />
        <FormField type="password" label="Пароль" name="password" />
        <Button
          disabled={!methods.formState.isValid || methods.formState.isSubmitting}
          type="submit"
          color="primary"
          variant="contained">
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
