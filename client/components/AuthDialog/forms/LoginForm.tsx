import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { login } from '../../../store/actions/user';

interface IProps {
  onClose: () => void;
}

export const LoginForm: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(login(data));
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
