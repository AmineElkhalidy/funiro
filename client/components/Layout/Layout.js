import React from 'react';

// Header & Footer
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
