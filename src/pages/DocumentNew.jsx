import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import axios from "axios";
import "../styles/pages/New.scss";

const DocumentNew = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [fileElement, setFileElement] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (e) => {};

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (event.target[1].files) {
      const fd = new FormData();
      fd.append("name", event.target[0].value);
      fd.append("fileD", event.target[1].files[0]);
      setFileElement(fd);

      await axios.post("http://localhost:3000/api/document", fd);
      setTimeout(() => {
        history.push("/document");
      }, 1500);
    }
  };

  return (
    <section className="add">
      <h3>AGREGAR UN NUEVO DOCUMENTO</h3>
      <form
        action="/api/document"
        method="POST"
        encType="multipart/form-data"
        id="add__form"
        className="add__form"
        onSubmit={handleFormSubmit}
      >
        <div className="add_form-element-container">
          <label htmlFor="name">
            <p>TITULO DEL DOCUMENTO</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Primer nombre"
              required
              className="add__form-input"
            />
          </label>
          <label htmlFor="file">
            <p>SELECCIONE UN ARCHIVO</p>
            <input
              type="file"
              name="fileD"
              required
              onChange={handleFileChange}
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
