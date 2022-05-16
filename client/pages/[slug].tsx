import { Box, Typography } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getDepartment } from '../store/actions/department';
import { getProductsByDepartment } from '../store/actions/product';
import { useAppSelector } from '../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Department = () => {
  const { department } = useAppSelector((state) => state.department);
  const { products } = useAppSelector((state) => state.product);

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: '30px' }}>
        {department?.name}
      </Typography>
      <Box className="product-list">
        {products.map((product) => (
          <>
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </>
        ))}
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { slug } = context.params as IParams;
  await store.dispatch(getDepartment(slug));
  await store.dispatch(getProductsByDepartment(slug));
  return { props: {} };
});

export default Department;
