import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useAppSelector } from '../store/hooks';

const Cart: NextPage = () => {
  const { cart } = useAppSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <MainLayout title="Корзина">
        <h1>Корзина пуста</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Корзина">
      {cart.map((item) => (
        <div>{item.title}</div>
      ))}
    </MainLayout>
  );
};

export default Cart;
