import React, { useEffect } from "react";
import "../styles/components/Menu.scss";
import { FaAddressBook, FaBook, FaUserClock, FaFileAlt } from "react-icons/fa";

const Menu = () => {
  useEffect(() => {
    //Toggle menu
    const $detailsList = document.querySelectorAll("details");

    const expand = () => {
      $detailsList.forEach(($detail) => {
        $detail.removeAttribute("open");
      });
    };

    $detailsList.forEach(($detail) => {
      $detail.querySelector("summary").addEventListener("click", expand);
    });
  }, []);

  return (
    <>
      <section className="menu">
        <h1>PORTAL CESA</h1>
        <ul className="menu__container">
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <FaAddressBook className="fas" />
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
              <FaBook className="fas" />
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
              <FaUserClock className="fas" />
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
              <FaFileAlt className="fas" />
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
      <div className="bg-image"></div>
    </>
  );
};

export default Menu;
