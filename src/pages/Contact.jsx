import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useGetData from "../hooks/useGetData";
import "../styles/pages/Contact.scss";

const Contact = () => {
  const contact = useGetData("http://localhost:3000/api/contact");
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
        <div className="container-fluid">
          <div className="row contacts__table">
            <div className="col">
              <h5>Primer nombre</h5>
            </div>
            <div className="col">
              <h5>Segundo nombre</h5>
            </div>
            <div className="col">
              <h5>Apellido paterno</h5>
            </div>
            <div className="col">
              <h5>Apellido materno</h5>
            </div>
            <div className="col-2">
              <h5>Correo</h5>
            </div>
            <div className="col">
              <h5>Prefijo</h5>
            </div>
            <div className="col">
              <h5>Teléfono</h5>
            </div>
            <div className="col">
              <h5>Celular</h5>
            </div>
            <div className="col">
              <h5>Extensión</h5>
            </div>
            <div className="col text-center">
              <h5>Editar</h5>
            </div>
          </div>
          {searchValues.map((contactItem) => {
            return (
              <div className="row contacts__table" key={contactItem.id}>
                <div className="col fs-5">
                  <p>{contactItem.firstName}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.secondName}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.firstLastname}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.secondLastname}</p>
                </div>
                <div className="col-2 fs-5">
                  <p>{contactItem.email}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.prefix}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.phone}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.cellphone}</p>
                </div>
                <div className="col fs-5">
                  <p>{contactItem.extension}</p>
                </div>
                <div className="col text-center">
                  <Link to={`/contact/${contactItem.id}/edit`}>
                    <FaPen />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Contact;
