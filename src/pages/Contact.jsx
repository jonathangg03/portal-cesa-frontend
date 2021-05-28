import React, { useEffect, useState } from "react";
import "../styles/pages/Contact.scss";
import { FaPen } from "react-icons/fa";
const App = () => {
  const [contact, setContact] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://portal-cesa.vercel.app/api/contact");
    const contactData = await res.json();
    const contacts = contactData.body;
    setContact(contacts);
  }, []);
  return (
    <>
      <section className="search">
        <h3>CRITERIO DE BUSQUEDA</h3>
        <input type="text" name="search" id="search" />
        <button type="button">Buscar Contacto</button>
      </section>
      <section className="contacts">
        <div className="contacts__table">
          <h4>Primer nombre</h4>
          <h4>Segundo nombre</h4>
          <h4>Apellido paterno</h4>
          <h4>Apellido materno</h4>
          <h4>Correo</h4>
          <h4>Prefijo</h4>
          <h4>Teléfono</h4>
          <h4>Celular</h4>
          <h4>Extensión</h4>
          <h4>Editar</h4>
        </div>
        {contact.map((contactItem) => {
          return (
            <div className="contacts__table">
              <p>{contactItem.firstName}</p>
              <p>{contactItem.secondName}</p>
              <p>{contactItem.firstLastname}</p>
              <p>{contactItem.secondLastname}</p>
              <p>{contactItem.email}</p>
              <p>{contactItem.prefix}</p>
              <p>{contactItem.phone}</p>
              <p>{contactItem.cellphone}</p>
              <p>{contactItem.extension}</p>
              <a href="">
                <FaPen />
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App;
