import React from "react";
import "../styles/pages/New.scss";

const ContactNew = () => {
  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO CONTACTO</h3>
      <form action="" id="add__form" className="add__form">
        <div className="add_form-element-container">
          <label htmlFor="firstName">
            <p>PRIMER NOMBRE</p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Primer nombre"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="secondName">
            <p>SEGUNDO NOMBRE</p>
            <input
              type="text"
              name="secondName"
              id="secondName"
              placeholder="Segundo nombre"
              className="add__form-input"
            />
          </label>
          <label htmlFor="firstLastname">
            <p>APELLIDO PATERNO</p>
            <input
              type="text"
              name="firstLastname"
              id="firstLastname"
              placeholder="Apellido paterno"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="secondLastname">
            <p>APELLIDO MATERNO</p>
            <input
              type="text"
              name="secondLastname"
              id="secondLastname"
              placeholder="Apellido materno"
              className="add__form-input"
            />
          </label>
          <label htmlFor="email">
            <p>CORREO</p>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="napellido@grupocesa.com"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="prefix">
            <p>PREFIJO</p>
            <input
              type="text"
              name="prefix"
              id="prefix"
              placeholder="+506"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="phone">
            <p>TELÉFONO</p>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="2202-2600"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="cellphone">
            <p>CELULAR</p>
            <input
              type="number"
              name="cellphone"
              id="cellphone"
              placeholder="2202-2600"
              className="add__form-input"
            />
          </label>
          <label htmlFor="extension">
            <p>EXTENSIÓN</p>
            <input
              type="number"
              name="extension"
              id="extension"
              placeholder="2600"
              className="add__form-input"
            />
          </label>
          <label htmlFor="tags">
            <p>TAGS</p>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="bd, redes, apodo"
              className="add__form-input"
            />
          </label>
        </div>
        <button type="submit" id="add__button">
          Agregar Contacto
        </button>
      </form>
    </section>
  );
};

export default ContactNew;
