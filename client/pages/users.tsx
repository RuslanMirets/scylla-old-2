import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getUsers } from '../store/actions/user';
import { useAppSelector } from '../store/hooks';

const Users: NextPage = () => {
  const { users } = useAppSelector((state) => state.user);

  return (
    <MainLayout title="Пользователи">
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        Пользователи
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Роль</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role[0].description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getUsers());
  return { props: {} };
});

export default Users;
