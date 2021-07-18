import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import config from "../config";
import "../styles/pages/Contact.scss";

const Contact = () => {
  const contact = useGetData(`${config.api}/api/contact`);
  const [searchValues, setSearchValues] = useState([]); //Resultados de busqueda
  const [searchInputValue, setSearchInputValue] = useState(""); //Input de busqueda

  useEffect(() => {
    setSearchValues(contact);
  }, [contact]);

  const handleSearchChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newContacts = contact.filter((contactItem) => {
      if (
        contactItem.firstName
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()) ||
        contactItem.tag.toLowerCase().includes(searchInputValue.toLowerCase())
      ) {
        return contactItem;
      }
    });

    setSearchValues(newContacts);
  };

  return (
    <>
      <Search onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
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
        {searchValues.map((contactItem) => {
          return (
            <div className="contacts__table" key={contactItem.id}>
              <p>{contactItem.firstName}</p>
              <p>{contactItem.secondName}</p>
              <p>{contactItem.firstLastname}</p>
              <p>{contactItem.secondLastname}</p>
              <p>{contactItem.email}</p>
              <p>{contactItem.prefix}</p>
              <p>{contactItem.phone}</p>
              <p>{contactItem.cellphone}</p>
              <p>{contactItem.extension}</p>
              <Link to={`/contact/${contactItem.id}/edit`}>
                <FaPen />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Contact;
