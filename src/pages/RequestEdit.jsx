import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useSendData from "../hooks/useSendData";
import useGetData from "../hooks/useGetData";
import DeleteModal from "../components/DeleteModal";
import "../styles/pages/New.scss";

const ContactNew = ({ match }) => {
  const contact = useGetData(
    `https://portal-cesa.vercel.app/api/request/${match.params.id}`
  );
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    client: "",
    name: "",
    phone: "",
    date: "",
    attendant: "",
    detail: "",
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
    useSendData(
      "https://portal-cesa.vercel.app/api/request",
      "PUT",
      formValues
    );
    setTimeout(() => {
      history.push("/request");
    }, 1000);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    useSendData(
      `https://portal-cesa.vercel.app/api/contact/${match.params.id}`,
      "DELETE"
    );
    setTimeout(() => {
      history.push("/contact");
    }, 1000);
  };
  return (
    <section className="add">
      <h3>EDITAR PEDIDO DE SERVICIO</h3>
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
          Editar Contacto
        </button>
      </form>
    </section>
  );
};

export default ContactNew;
