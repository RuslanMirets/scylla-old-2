import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { CatalogCard } from '../components/CatalogCard';
import { ProductCard } from '../components/ProductCard';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getDepartment } from '../store/actions/department';
import { getProductsByDepartment } from '../store/actions/product';
import { getTypesByDepartment } from '../store/actions/type';
import { useAppSelector } from '../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Department = () => {
  const { department } = useAppSelector((state) => state.department);
  // const { products } = useAppSelector((state) => state.product);
  const { types } = useAppSelector((state) => state.type);

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: '30px' }}>
        {department?.name}
      </Typography>
      {/* <Box className="product-list">
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
      </Box> */}
      <Box className="catalog-list">
        {types.map((type) => (
          <CatalogCard type={type} />
        ))}
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { slug } = context.params as IParams;
  await store.dispatch(getDepartment(slug));
  // await store.dispatch(getProductsByDepartment(slug));
  await store.dispatch(getTypesByDepartment(slug));
  return { props: {} };
});

export default Department;
