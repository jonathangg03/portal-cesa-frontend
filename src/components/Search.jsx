import React from "react";
import "../styles/components/Search.scss";

const Menu = ({ onSubmit, onChange }) => {
  return (
    <form className="search" onSubmit={onSubmit}>
      <h3>CRITERIO DE BUSQUEDA</h3>
      <input
        type="text"
        name="search"
        id="search"
        onChange={onChange}
        required
      />
      <button type="sumbit">Buscar Contacto</button>
    </form>
  );
};

export default Menu;
