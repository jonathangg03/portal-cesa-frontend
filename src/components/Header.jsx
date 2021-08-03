import React from "react";
import "../styles/components/Header.scss";

const Header = ({ page }) => {
  const handleLogout = () => {
    localStorage.removeItem("email");
  };
  return (
    <header>
      <h2>{page}</h2>
      <a onClick={handleLogout} href="/">
        Cerrar sesión
      </a>
    </header>
  );
};

export default Header;
