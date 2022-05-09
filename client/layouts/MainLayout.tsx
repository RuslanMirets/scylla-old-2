import { Container, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { theme } from '../theme';

interface IProps {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<IProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Главная'}</title>
        <meta name="description" content={`Описание. ` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Container>{children}</Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
