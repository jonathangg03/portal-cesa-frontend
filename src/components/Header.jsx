import React from "react";
import "../styles/components/Header.scss";

const Header = ({ children }) => {
  return (
    <header>
      <h2>Directorio</h2>
      <nav>
        <ul className="top-menu">
          <li className="top-menu__item">Directorio</li>
          <li className="top-menu__item">Clientes</li>
          <li className="top-menu__item">Documentos</li>
          <li className="top-menu__item">Pedidos de servicio</li>
          <li className="top-menu__item">Salir</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;