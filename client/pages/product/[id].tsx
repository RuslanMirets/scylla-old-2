import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { ProductInfo } from '../../components/ProductInfo';
import MainLayout from '../../layouts/MainLayout';
import { wrapper } from '../../store';
import { getProductById } from '../../store/actions/product';
import { useAppSelector } from '../../store/hooks';

interface IParams extends ParsedUrlQuery {
  id: string;
}

const ProductDetail: NextPage = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <MainLayout>
      <ProductInfo product={product!} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { id } = context.params as IParams;
  await store.dispatch(getProductById(id));
  return { props: {} };
});

export default ProductDetail;
