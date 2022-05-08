import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Users: NextPage = () => {
  return (
    <MainLayout title="Пользователи">
      <Typography variant="h5">Пользователи</Typography>
    </MainLayout>
  );
};

export default Users;
