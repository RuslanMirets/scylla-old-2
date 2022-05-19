import { NextPage } from 'next';
import React from 'react';
import { CartItem } from '../components/CartItem';
import { ShippingForm } from '../components/ShippingForm';
import MainLayout from '../layouts/MainLayout';
import { increaseQuantity, decreaseQuantity } from '../store/actions/cart';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { cartSlice } from '../store/slices/cart';
import { IProduct } from '../types/product';
import { getAPI } from '../utils/fetchData';

const Cart: NextPage = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const getTotal = () => {
      const response = cart.reduce((prev: any, item: IProduct) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(response);
    };
    getTotal();
  }, [cart]);

  React.useEffect(() => {
    if (cart && cart.length > 0) {
      let newArr: any[] = [];
      const updateCart = async () => {
        for (const item of cart) {
          const res = await getAPI(`product/${item.id}`);
          const { id, title, images, price, inStock, sold } = res.data;
          if (inStock > 0) {
            newArr.push({
              id,
              title,
              images,
              price,
              inStock,
              sold,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }
        dispatch(cartSlice.actions.addToCart(newArr));
      };
      updateCart();
    }
  }, []);

  if (cart.length === 0) {
    return (
      <MainLayout title="Корзина">
        <h1>Корзина пуста</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Корзина">
      <div className="cart">
        <div className="cart__info">
          <h2>Корзина</h2>
          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increase={increaseQuantity}
                decrease={decreaseQuantity}
              />
            ))}
          </div>
        </div>
        <div className="cart__shipping">
          <h2>Доставка</h2>
          <ShippingForm total={total} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
