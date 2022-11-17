import React from "react";

// Header & Footer
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="overflow-hidden px-12 py-32">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
