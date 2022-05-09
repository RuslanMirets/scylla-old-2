import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { LoginForm } from './forms/LoginForm';
import styles from './AuthDialog.module.scss';
import { RegisterForm } from './forms/RegisterForm';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<IProps> = ({ open, onClose }) => {
  const [formType, setFormType] = useState<'login' | 'register'>('login');

  return (
    <Dialog className={styles.root} open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="div">
          {formType === 'login' && 'Авторизация'}
          {formType === 'register' && 'Регистрация'}
        </Typography>
        <IconButton className={styles.close} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles.content} dividers>
        {formType === 'login' && <LoginForm onClose={onClose} />}
        {formType === 'register' && <RegisterForm onClose={onClose} />}
      </DialogContent>
      <DialogActions className={styles.actions}>
        <Typography variant="body1">
          {formType === 'login' && 'Нет аккаунта?'}
          {formType === 'register' && 'Есть аккаунт?'}
        </Typography>
        {formType === 'login' && (
          <Button onClick={() => setFormType('register')}>Регистрация</Button>
        )}
        {formType === 'register' && <Button onClick={() => setFormType('login')}>Войти</Button>}
      </DialogActions>
    </Dialog>
  );
};
