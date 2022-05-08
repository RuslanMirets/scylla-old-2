import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Profile: NextPage = () => {
  return (
    <MainLayout title="Профиль">
      <Typography variant="h5">Профиль</Typography>
    </MainLayout>
  );
};

export default Profile;
