import { ReactNode } from 'react';

import { Box } from '@chakra-ui/layout';

import { useGlobalStoreContext } from '../context';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box maxW="100vw" overflowX="hidden">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
