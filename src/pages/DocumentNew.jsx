import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import "../styles/pages/New.scss";

const DocumentNew = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleFormChange = (event) => {
    if (event.target.name === "name") {
      setFormValues({
        ...formValues,
        name: event.target.value,
      });
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    useSendData(
      "http://localhost:3000/api/document",
      "POST",
      {
        ...formValues,
        file,
      },
      "multipart/form-data"
    );
    setTimeout(() => {
      history.push("/document");
    }, 1500);
  };

  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO DOCUMENTO</h3>
      <form
        action="/files"
        id="add__form"
        className="add__form"
        encType="multipart/form-data"
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
          <label htmlFor="file">
            <p>SELECCIONE UN ARCHIVO</p>
            <input
              onChange={handleFileChange}
              type="file"
              name="file"
              id="file"
              className="add__form-input file"
            />
            <p>Sí envía un PDF, se abrira automaticamente en otra pestaña</p>
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
