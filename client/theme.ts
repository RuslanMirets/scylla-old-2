import { createTheme } from '@mui/material';
import { ruRU } from '@mui/material/locale';

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#5c6bc0',
        light: '#8e99f3',
        dark: '#26418f',
        contrastText: '#ebebeb',
      },
      secondary: {
        main: '#26a69a',
        light: '#64d8cb',
        dark: '#00766c',
        contrastText: '#ffffff',
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: '"Rubik", sans-serif',
    },
  },
  ruRU,
);
