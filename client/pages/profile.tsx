import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useAppSelector } from '../store/hooks';

const Profile: NextPage = () => {
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    user ?? router.push('/');
  }, [user]);

  if (user === null) {
    return <MainLayout title="Профиль"></MainLayout>;
  }

  return (
    <MainLayout title="Профиль">
      <Typography variant="h5">Профиль | {user?.name}</Typography>
    </MainLayout>
  );
};

export default Profile;
