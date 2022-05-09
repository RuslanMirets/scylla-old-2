import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { setCookie } from 'nookies';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { register } from '../../../store/actions/user';
import { useAppDispatch } from '../../../store/hooks';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface IProps {
  onClose: () => void;
}

export const RegisterForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(register(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField type="text" label="Имя" name="name" />
        <FormField type="text" label="Email" name="email" />
        <FormField type="password" label="Пароль" name="password" />
        <Button
          disabled={!methods.formState.isValid || methods.formState.isSubmitting}
          type="submit"
          color="primary"
          variant="contained">
          Регистрация
        </Button>
      </form>
    </FormProvider>
  );
};
