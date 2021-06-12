import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAddressBook, FaBook, FaUserClock, FaFileAlt } from "react-icons/fa";
import "../styles/components/Menu.scss";

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
        <h2>PORTAL CESA</h2>
        <ul className="menu__container">
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <FaAddressBook className="fas" />
              <p>DIRECTORIO</p>
            </summary>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link to="/contact">Ver contactos</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/contact/new">Agregar contacto</Link>
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
                <Link to="/client">Ver clientes</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/client/new">Agregar cliente</Link>
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
                <Link to="/request">Ver pedidos</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/request/new">Agregar pedido</Link>
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
                <Link to="/document">Ver documentos</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/document/new">Agregar documento</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/document/archived">Documentos archivados</Link>
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
