import React from "react";
import "../styles/pages/Contact.scss";

const App = () => {
  return (
    <>
      <section className="search">
        <h3>CRITERIO DE BUSQUEDA</h3>
        <input type="text" name="search" id="search" />
        <button type="button">Buscar Contacto</button>
      </section>
      <section className="contacts">
        <div className="contacts__table">
          <div className="contacts__table-column">
            <h4>Primer nombre</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Segundo nombre</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Apellido paterno</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Apellido materno</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Correo</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Prefijo</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Teléfono</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Celular</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Extensión</h4>
          </div>
          <div className="contacts__table-column">
            <h4>Editar</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
