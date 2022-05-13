import { Paper, Typography } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getDepartment } from '../store/actions/department';
import { getTypeByDepartment } from '../store/actions/type';
import { useAppSelector } from '../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Department = () => {
  const { department } = useAppSelector((state) => state.department);
  const { types } = useAppSelector((state) => state.type);

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: '30px' }}>
        {department?.name} отдел
      </Typography>
      <Paper sx={{ padding: '20px' }}>
        {types.map((type) => (
          <div>{type.name}</div>
        ))}
      </Paper>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { slug } = context.params as IParams;
  await store.dispatch(getDepartment(slug));
  await store.dispatch(getTypeByDepartment(slug));
  return { props: {} };
});

export default Department;
