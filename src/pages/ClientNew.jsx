import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import "../styles/pages/New.scss";

const ClientNew = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData("https://portal-cesa.vercel.app/api/client", "POST", {
      ...formValues,
    });
    setTimeout(() => {
      history.push("/client");
    }, 1000);
  };
  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO CONTACTO</h3>
      <form
        action=""
        id="add__form"
        className="add__form"
        onSubmit={handleFormSubmit}
      >
        <div className="add_form-element-container">
          <label htmlFor="name">
            <p>NOMBRE DEL CLIENTE</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="name"
              id="name"
              placeholder="Primer nombre"
              className="add__form-input"
              value={formValues.name}
            />
          </label>
        </div>
        <button type="submit" id="add__button">
          Agregar Cliente
        </button>
      </form>
    </section>
  );
};

export default ClientNew;
