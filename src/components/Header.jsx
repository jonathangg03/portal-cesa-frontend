import React from "react";
import "../styles/components/Header.scss";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("email");
  };
  return (
    <header>
      <h2>Directorio</h2>
      <nav>
        <ul className="top-menu">
          <li className="top-menu__item">Directorio</li>
          <li className="top-menu__item">Clientes</li>
          <li className="top-menu__item">Documentos</li>
          <li className="top-menu__item">Pedidos de servicio</li>
          <li className="top-menu__item">
            <a onClick={handleLogout} href="/">
              Salir
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
