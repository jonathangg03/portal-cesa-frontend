import React from "react";
import "../styles/components/Search.scss";

const Menu = () => {
  return (
    <section className="search">
      <h3>CRITERIO DE BUSQUEDA</h3>
      <input type="text" name="search" id="search" />
      <button type="button">Buscar Contacto</button>
    </section>
  );
};

export default Menu;
