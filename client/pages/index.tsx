import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Typography variant="h5">Home</Typography>
    </MainLayout>
  );
};

export default Home;
