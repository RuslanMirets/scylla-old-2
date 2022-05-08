import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@mui/material';

interface IProps {
  onClose: () => void;
}

export const LoginForm: React.FC<IProps> = ({ onClose }) => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => {
    onClose();
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
