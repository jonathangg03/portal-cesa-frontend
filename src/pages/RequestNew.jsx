import React, { Component } from "react";
import sendData from "../utils/sendData";
import config from "../config";
import Loading from "../components/Loading";
import Header from "../components/Header";
import "../styles/pages/New.scss";

class RequestNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        client: "",
        name: "",
        phone: "",
        date: "",
        attendant: "",
        detail: "",
      },
      loading: false,
      error: null,
    };
  }

  handleFormChange = (event) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(
        `${config.api}/api/request`,
        "POST",
        this.state.formValues
      );
      this.setState({ ...this.state, loading: false });
      this.props.history.push("/request");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <>
        <Header page="Pedidos de servicio" />
        <section className="add">
          <h3>AGREGAR UN NUEVO PEDIDO DE SERVICIO</h3>
          <form
            action=""
            id="add__form"
            className="add__form"
            onSubmit={this.handleFormSubmit}
          >
            <div className="add_form-element-container">
              <label htmlFor="client">
                <p>CLIENTE</p>
                <input
                  onChange={this.handleFormChange}
                  type="text"
                  name="client"
                  id="client"
                  placeholder="Cliente"
                  className="add__form-input"
                  value={this.state.formValues.client}
                />
              </label>
              <label htmlFor="name">
                <p>PERSONA QUE LLAMÓ</p>
                <input
                  onChange={this.handleFormChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre de quien llamó"
                  required
                  className="add__form-input"
                  value={this.state.formValues.name}
                />
              </label>
              <label htmlFor="phone">
                <p>TELÉFONO</p>
                <input
                  onChange={this.handleFormChange}
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="2222-2222"
                  required
                  className="add__form-input"
                  value={this.state.formValues.phone}
                />
              </label>
              <label htmlFor="date">
                <p>FECHA</p>
                <input
                  onChange={this.handleFormChange}
                  type="datetime-local"
                  name="date"
                  id="date"
                  className="add__form-input"
                  value={this.state.formValues.date}
                />
              </label>
              <label htmlFor="attendant">
                <p>PERSONA QUE ATENDIÓ</p>
                <input
                  onChange={this.handleFormChange}
                  type="text"
                  name="attendant"
                  id="attendant"
                  placeholder="Persona de monitoreo"
                  required
                  className="add__form-input"
                  value={this.state.formValues.attendant}
                />
              </label>
              <label htmlFor="detail">
                <p>DETALLES</p>
                <input
                  onChange={this.handleFormChange}
                  type="text"
                  name="detail"
                  id="detail"
                  placeholder="Detalles"
                  required
                  className="add__form-input"
                  value={this.state.formValues.detail}
                />
              </label>
            </div>
            <button type="submit" id="add__button">
              Agregar Contacto
            </button>
          </form>
          {this.state.loading && <Loading />}
        </section>
      </>
    );
  }
}

export default RequestNew;
