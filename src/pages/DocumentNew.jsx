import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import "../styles/pages/New.scss";

const DocumentNew = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
    document: "",
  });

  const handleFormChange = (event) => {
    console.log(event);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData(
      "https://portal-cesa.vercel.app/api/document",
      "POST",
      formValues
    );
    setTimeout(() => {
      history.push("/document");
    }, 1000);
  };

  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO DOCUMENTO</h3>
      <form
        action=""
        id="add__form"
        className="add__form"
        onSubmit={handleFormSubmit}
      >
        <div className="add_form-element-container">
          <label htmlFor="name">
            <p>TITULO DEL DOCUMENTO</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="name"
              id="name"
              placeholder="Primer nombre"
              required
              className="add__form-input"
              value={formValues.name}
            />
          </label>
          <label htmlFor="document">
            <p>SELECCIONE UN ARCHIVO</p>
            <input
              onChange={handleFormChange}
              type="file"
              name="document"
              id="document"
              placeholder="Segundo nombre"
              className="add__form-input file"
              value={formValues.document}
            />
          </label>
        </div>
        <button type="submit" id="add__button">
          Agregar documento
        </button>
      </form>
    </section>
  );
};

export default DocumentNew;
