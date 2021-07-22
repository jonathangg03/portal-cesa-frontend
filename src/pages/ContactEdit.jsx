import React, { Component } from "react";
import sendData from "../utils/sendData";
import getData from "../utils/getData";
import DeleteModal from "../components/DeleteModal";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/New.scss";

class ContactNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
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
      },
      data: {},
      loading: false,
      error: null,
      openModal: false,
    };
  }
  //`${config.api}/api/contact/${match.params.id}`

  async componentDidMount() {
    try {
      const response = await getData(
        `${config.api}/api/contact/${this.props.match.params.id}`
      );
      this.setState({
        ...this.state,
        loading: false,
        formValues: { ...response.data.body },
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error });
    }
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
        `${config.api}/api/contact/${this.props.match.params.id}`,
        "PUT",
        this.state.formValues
      );
      this.setState({ ...this.state, loading: false });
      this.props.history.push("/contact");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error });
    }
  };

  handleOpenModal = () => {
    this.setState({ ...this.state, openModal: !this.state.openModal });
  };

  handleDelete = async () => {
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(
        `${config.api}/api/contact/${this.props.match.params.id}`,
        "DELETE"
      );
      this.setState({ ...this.state, loading: false, openModal: false });
      this.props.history.push("/contact");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error });
    }
  };

  render() {
    return (
      <section className="add">
        <h3>AGREGAR UN NUEVO CONTACTO</h3>
        <form
          action=""
          id="add__form"
          className="add__form"
          onSubmit={this.handleFormSubmit}
        >
          <div className="add_form-element-container">
            <label htmlFor="firstName">
              <p>PRIMER NOMBRE</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Primer nombre"
                required
                className="add__form-input"
                value={this.state.formValues.firstName}
              />
            </label>
            <label htmlFor="secondName">
              <p>SEGUNDO NOMBRE</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="secondName"
                id="secondName"
                placeholder="Segundo nombre"
                className="add__form-input"
                value={this.state.formValues.secondName}
              />
            </label>
            <label htmlFor="firstLastname">
              <p>APELLIDO PATERNO</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="firstLastname"
                id="firstLastname"
                placeholder="Apellido paterno"
                required
                className="add__form-input"
                value={this.state.formValues.firstLastname}
              />
            </label>
            <label htmlFor="secondLastname">
              <p>APELLIDO MATERNO</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="secondLastname"
                id="secondLastname"
                placeholder="Apellido materno"
                className="add__form-input"
                value={this.state.formValues.secondLastname}
              />
            </label>
            <label htmlFor="email">
              <p>CORREO</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="email"
                id="email"
                placeholder="napellido@grupocesa.com"
                required
                className="add__form-input"
                value={this.state.formValues.email}
              />
            </label>
            <label htmlFor="prefix">
              <p>PREFIJO</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="prefix"
                id="prefix"
                placeholder="+506"
                required
                className="add__form-input"
                value={this.state.formValues.prefix}
              />
            </label>
            <label htmlFor="phone">
              <p>TELÉFONO</p>
              <input
                onChange={this.handleFormChange}
                type="number"
                name="phone"
                id="phone"
                placeholder="2202-2600"
                required
                className="add__form-input"
                value={this.state.formValues.phone}
              />
            </label>
            <label htmlFor="cellphone">
              <p>CELULAR</p>
              <input
                onChange={this.handleFormChange}
                type="number"
                name="cellphone"
                id="cellphone"
                placeholder="2202-2600"
                className="add__form-input"
                value={this.state.formValues.cellphone}
              />
            </label>
            <label htmlFor="extension">
              <p>EXTENSIÓN</p>
              <input
                onChange={this.handleFormChange}
                type="number"
                name="extension"
                id="extension"
                placeholder="2600"
                className="add__form-input"
                value={this.state.formValues.extension}
              />
            </label>
            <label htmlFor="tags">
              <p>TAGS</p>
              <input
                onChange={this.handleFormChange}
                type="text"
                name="tag"
                id="tags"
                placeholder="bd, redes, apodo"
                className="add__form-input"
                value={this.state.formValues.tag}
              />
            </label>
          </div>
          <button type="submit">Editar Contacto</button>
          <button
            type="button"
            className="delete_button"
            onClick={this.handleOpenModal}
          >
            Eliminar Contacto
          </button>
        </form>
        <DeleteModal
          opened={this.state.openModal}
          handleCloseModal={this.handleOpenModal}
          handleDelete={this.handleDelete}
        />
        {this.state.loading && <Loading />}
      </section>
    );
  }
}

export default ContactNew;
