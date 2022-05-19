import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import { getMe } from '../store/actions/user';
import { getDepartments } from '../store/actions/department';
import { useAppSelector } from '../store/hooks';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  const { cart } = useAppSelector((state) => state.cart);
  React.useEffect(() => {
    localStorage.setItem('__scylla__cart', JSON.stringify(cart));
  }, [cart]);

  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx }) => {
  await store.dispatch(getMe(ctx));
  await store.dispatch(getDepartments());
  return { pageProps: {} };
});

export default wrapper.withRedux(App);
