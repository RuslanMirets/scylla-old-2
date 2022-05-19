import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppSelector } from '../../store/hooks';
import { ShippingFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';
import styles from './ShippingForm.module.scss';

interface IProps {
  total: number;
}

export const ShippingForm: React.FC<IProps> = ({ total }) => {
  const { user } = useAppSelector((state) => state.user);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(ShippingFormSchema),
  });

  const onSubmit = (orderData: any) => {
    console.log(orderData);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField type="text" label="Адрес" name="address" />
        <FormField type="tel" label="Номер телефона" name="phone" />
        <div className={styles.total}>
          Всего: <span>{total} р.</span>
        </div>
        {user ? (
          <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
            Продолжить оплату
          </Button>
        ) : (
          <Link href="/login">
            <a className={styles.btn}>
              <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
                Продолжить оплату
              </Button>
            </a>
          </Link>
        )}
      </form>
    </FormProvider>
  );
};
