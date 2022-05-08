import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import { Api } from '../utils/api';
import { setUserData } from '../store/slices/user';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();
    store.dispatch(setUserData(userData));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
