import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NotFound: NextPage = () => {
  return (
    <MainLayout title="404">
      <Typography className="error-page" variant="h5">
        404 | Запрашиваемая страница не существует
      </Typography>
    </MainLayout>
  );
};

export default NotFound;
