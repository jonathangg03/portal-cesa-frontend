import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import useGetData from "../hooks/useGetData";
import DeleteModal from "../components/DeleteModal";
import "../styles/pages/New.scss";

const ContactNew = ({ match }) => {
  const contact = useGetData(
    `http://localhost:3000/api/contact/${match.params.id}`
  );
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    firstName: "",
    secondName: "",
    firstLastname: "",
    secondLastname: "",
    email: "",
    prefix: "",
    phone: "",
    cellphone: "",
    extension: "",
    tag: "",
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (contact[0]) {
      setFormValues({ ...contact[0] });
    }
  }, [contact]);

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    useSendData("http://localhost:3000/api/contact", "PUT", formValues);
    setTimeout(() => {
      history.push("/contact");
    }, 1000);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    useSendData(
      `http://localhost:3000/api/contact/${match.params.id}`,
      "DELETE"
    );
    setTimeout(() => {
      history.push("/contact");
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
          <label htmlFor="firstName">
            <p>PRIMER NOMBRE</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Primer nombre"
              required
              className="add__form-input"
              value={formValues.firstName}
            />
          </label>
          <label htmlFor="secondName">
            <p>SEGUNDO NOMBRE</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="secondName"
              id="secondName"
              placeholder="Segundo nombre"
              className="add__form-input"
              value={formValues.secondName}
            />
          </label>
          <label htmlFor="firstLastname">
            <p>APELLIDO PATERNO</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="firstLastname"
              id="firstLastname"
              placeholder="Apellido paterno"
              required
              className="add__form-input"
              value={formValues.firstLastname}
            />
          </label>
          <label htmlFor="secondLastname">
            <p>APELLIDO MATERNO</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="secondLastname"
              id="secondLastname"
              placeholder="Apellido materno"
              className="add__form-input"
              value={formValues.secondLastname}
            />
          </label>
          <label htmlFor="email">
            <p>CORREO</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="email"
              id="email"
              placeholder="napellido@grupocesa.com"
              required
              className="add__form-input"
              value={formValues.email}
            />
          </label>
          <label htmlFor="prefix">
            <p>PREFIJO</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="prefix"
              id="prefix"
              placeholder="+506"
              required
              className="add__form-input"
              value={formValues.prefix}
            />
          </label>
          <label htmlFor="phone">
            <p>TELÉFONO</p>
            <input
              onChange={handleFormChange}
              type="number"
              name="phone"
              id="phone"
              placeholder="2202-2600"
              required
              className="add__form-input"
              value={formValues.phone}
            />
          </label>
          <label htmlFor="cellphone">
            <p>CELULAR</p>
            <input
              onChange={handleFormChange}
              type="number"
              name="cellphone"
              id="cellphone"
              placeholder="2202-2600"
              className="add__form-input"
              value={formValues.cellphone}
            />
          </label>
          <label htmlFor="extension">
            <p>EXTENSIÓN</p>
            <input
              onChange={handleFormChange}
              type="number"
              name="extension"
              id="extension"
              placeholder="2600"
              className="add__form-input"
              value={formValues.extension}
            />
          </label>
          <label htmlFor="tags">
            <p>TAGS</p>
            <input
              onChange={handleFormChange}
              type="text"
              name="tag"
              id="tags"
              placeholder="bd, redes, apodo"
              className="add__form-input"
              value={formValues.tag}
            />
          </label>
        </div>
        <button type="submit">Editar Contacto</button>
        <button
          type="button"
          className="delete_button"
          onClick={handleOpenModal}
        >
          Eliminar Contacto
        </button>
      </form>
      <DeleteModal
        opened={openModal}
        handleCloseModal={handleOpenModal}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default ContactNew;
