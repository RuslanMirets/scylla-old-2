import { Box, Typography } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { CatalogCard } from '../../components/CatalogCard';
import MainLayout from '../../layouts/MainLayout';
import { wrapper } from '../../store';
import { getDepartment } from '../../store/actions/department';
import { getTypesByDepartment } from '../../store/actions/type';
import { useAppSelector } from '../../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Department = () => {
  const { department } = useAppSelector((state) => state.department);
  const { types } = useAppSelector((state) => state.type);

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: '30px' }}>
        {department?.name === 'Мужчины' ? 'Мужской отдел' : 'Женский отдел'}
      </Typography>
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
  await store.dispatch(getTypesByDepartment(slug));
  return { props: {} };
});

export default Department;
