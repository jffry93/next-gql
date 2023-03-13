import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Search from './Search';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Search />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
