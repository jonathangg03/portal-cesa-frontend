import React from "react";
import "../styles/components/Header.scss";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
  };
  return (
    <header>
      <h2>Directorio</h2>
      <nav>
        <ul className="top-menu">
          <li className="top-menu__item">
            <a onClick={handleLogout} href="/">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
