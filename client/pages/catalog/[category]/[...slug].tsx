import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { CategoryCard } from '../../../components/CategoryCard';
import MainLayout from '../../../layouts/MainLayout';
import { wrapper } from '../../../store';
import { getCategoriesByType } from '../../../store/actions/category';
import { getDepartmentByType } from '../../../store/actions/department';
import { getTypeBySlug } from '../../../store/actions/type';
import { useAppSelector } from '../../../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Category: NextPage = () => {
  const { type } = useAppSelector((state) => state.type);
  const { categories } = useAppSelector((state) => state.category);

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: '30px' }}>
        {type?.name}
      </Typography>
      <div className="catalog-list">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { slug } = context.params as IParams;
  await store.dispatch(getTypeBySlug(slug));
  await store.dispatch(getCategoriesByType(slug));
  await store.dispatch(getDepartmentByType(slug));

  return { props: {} };
});

export default Category;
