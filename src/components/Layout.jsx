import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import "../styles/components/Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="menu-separator">
        <Header />
        {children}
      </div>
      <Menu />
    </>
  );
};

export default Layout;
