import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import axios from "axios";
import "../styles/pages/New.scss";

const DocumentNew = () => {
  const history = useHistory();
  // const [formValues, setFormValues] = useState({
  //   name: "",
  // });
  const [fileElement, setFileElement] = useState(null);

  const handleFormChange = (event) => {
    // if (event.target.name === "name") {
    //   setFormValues({
    //     ...formValues,
    //     name: event.target.value,
    //   });
    // }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      const fd = new FormData();
      fd.append("fileD", e.target.files[0]);
      setFileElement(fd);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(fileElement);
    // console.log(formValues);
    // useSendData("http://localhost:3000/api/document", "POST", fileElement);
    await axios.post("http://localhost:3000/api/document", fileElement);
    // setTimeout(() => {
    //   history.push("/document");
    // }, 1500);
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
          {/*          <label htmlFor="name">
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
</label>*/}
          <label htmlFor="file">
            <p>SELECCIONE UN ARCHIVO</p>
            <input
              type="file"
              name="fileD"
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
