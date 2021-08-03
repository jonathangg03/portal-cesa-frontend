import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaBook,
  FaUserClock,
  FaFileAlt,
  FaBars,
} from "react-icons/fa";
import "../styles/components/Menu.scss";

const Menu = () => {
  const menu = useRef("");
  const bg_img = useRef("");
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

  const handleShowMenu = () => {
    menu.current.classList.toggle("menu-show");
    bg_img.current.classList.toggle("menu-show");
  };

  return (
    <>
      <section className="menu" ref={menu}>
        <h2>PORTAL CESA</h2>
        <ul className="menu__container">
          <details className="menu__container-details">
            <summary className="menu__container-details-title">
              <FaAddressBook className="fas" />
              <p>DIRECTORIO</p>
            </summary>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link to="/contact" onClick={handleShowMenu}>
                  Ver contactos
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/contact/new" onClick={handleShowMenu}>
                  Agregar contacto
                </Link>
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
                <Link to="/client" onClick={handleShowMenu}>
                  Ver clientes
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/client/new" onClick={handleShowMenu}>
                  Agregar cliente
                </Link>
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
                <Link to="/request" onClick={handleShowMenu}>
                  Ver pedidos
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/request/new" onClick={handleShowMenu}>
                  Agregar pedido
                </Link>
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
                <Link to="/document" onClick={handleShowMenu}>
                  Ver documentos
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/document/new" onClick={handleShowMenu}>
                  Agregar documento
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/document/archived" onClick={handleShowMenu}>
                  Documentos archivados
                </Link>
              </li>
            </ul>
          </details>
        </ul>
      </section>
      <div className="bg-image" ref={bg_img}></div>
      <div className="menu__activator" onClick={handleShowMenu}>
        <FaBars />
      </div>
    </>
  );
};

export default Menu;
