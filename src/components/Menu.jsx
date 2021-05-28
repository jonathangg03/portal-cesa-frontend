import React from "react";
import "../styles/components/Menu.scss";

const Menu = () => {
  return (
    <>
      <section className="menu">
        <h1>PORTAL CESA</h1>
        <ul className="menu__container">
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <i className="fas fa-address-book"></i>
              <p>DIRECTORIO</p>
            </summary>
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="./contactos.html">Ver contactos</a>
              </li>
              <li className="menu__list-item">
                <a href="./contactos_agregar.html">Agregar contacto</a>
              </li>
            </ul>
          </details>
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <i className="fas fa-book"></i>
              <p>CLIENTES</p>
            </summary>
            <ul>
              <li className="menu__list-item">
                <a href="./clientes.html">Ver clientes</a>
              </li>
              <li className="menu__list-item">
                <a href="./clientes_agregar.html">Agregar cliente</a>
              </li>
            </ul>
          </details>
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <i className="fas fa-user-clock"></i>
              <p>PEDIDOS DE SERVICIO</p>
            </summary>
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="./pedidos.html">Ver pedidos</a>
              </li>
              <li className="menu__list-item">
                <a href="./pedidos_agregar.html">Agregar pedido</a>
              </li>
            </ul>
          </details>
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <i className="fas fa-file-alt"></i>
              <p>DOCUMENTOS</p>
            </summary>
            <ul className="menu__list">
              <li className="menu__list-item">
                <a href="./documentos.html">Ver documentos</a>
              </li>
              <li className="menu__list-item">
                <a href="./documentos_agregar.html">Agregar documento</a>
              </li>
              <li className="menu__list-item">
                <a href="">Documentos archivados</a>
              </li>
            </ul>
          </details>
        </ul>
      </section>
      <div class="bg-image"></div>
    </>
  );
};

export default Menu;
