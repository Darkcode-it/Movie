import React from 'react';
import Nav from './header/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout; 