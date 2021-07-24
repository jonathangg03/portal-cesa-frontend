import React from "react";
import "../styles/components/Search.scss";

const Menu = ({ onSubmit, onChange, placeholder }) => {
  return (
    <form className="search" onSubmit={onSubmit}>
      <h3>CRITERIO DE BUSQUEDA</h3>
      <input
        type="text"
        name="search"
        id="search"
        onChange={onChange}
        placeholder={placeholder}
      />
      <button type="sumbit">Buscar</button>
    </form>
  );
};

export default Menu;
