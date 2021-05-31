import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import "../styles/pages/New.scss";

const RequestNew = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    client: "",
    name: "",
    phone: "",
    date: "",
    attendant: "",
    detail: "",
  });

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData(
      "https://portal-cesa.vercel.app/api/request",
      "POST",
      formValues
    );
    setTimeout(() => {
      history.push("/request");
    }, 1500);
  };
  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO PEDIDO DE SERVICIO</h3>
      <form
        action=""
        id="add__form"
        className="add__form"
        onSubmit={handleFormSubmit}
      >
        <div className="add_form-element-container">
          <label htmlFor="client">
            <p>CLIENTE</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="client"
              id="client"
              placeholder="Cliente"
              className="add__form-input"
              value={formValues.client}
            />
          </label>
          <label htmlFor="name">
            <p>PERSONA QUE LLAMÓ</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="name"
              id="name"
              placeholder="Nombre de quien llamó"
              required
              className="add__form-input"
              value={formValues.name}
            />
          </label>
          <label htmlFor="phone">
            <p>TELÉFONO</p>
            <input
              onChange={handleFormChange}
              type="number"
              name="phone"
              id="phone"
              placeholder="2222-2222"
              required
              className="add__form-input"
              value={formValues.phone}
            />
          </label>
          <label htmlFor="date">
            <p>FECHA</p>
            <input
              onChange={handleFormChange}
              type="datetime-local"
              name="date"
              id="date"
              className="add__form-input"
              value={formValues.date}
            />
          </label>
          <label htmlFor="attendant">
            <p>PERSONA QUE ATENDIÓ</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="attendant"
              id="attendant"
              placeholder="Persona de monitoreo"
              required
              className="add__form-input"
              value={formValues.attendant}
            />
          </label>
          <label htmlFor="detail">
            <p>DETALLES</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="detail"
              id="detail"
              placeholder="Detalles"
              required
              className="add__form-input"
              value={formValues.detail}
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

export default RequestNew;
