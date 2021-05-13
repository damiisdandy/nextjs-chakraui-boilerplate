import '../styles/global.css';

import { AppProps } from 'next/app';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { globalStoreProvider as GlobalStoreProvider } from '../components/context';
import Layout from '../components/Layout';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStoreProvider>
      <ChakraProvider theme={extendTheme(theme)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GlobalStoreProvider>
  );
}

export default MyApp;
