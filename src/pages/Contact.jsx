import React, { Component } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import getData from "../utils/getData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Contact.scss";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: "",
      data: [],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/contact`);
      this.setState({
        ...this.state,
        loading: false,
        data: response.data.body,
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      ...this.state,
      searchInputValue: event.target.value,
    });
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/contact`);
      const newContacts = response.data.body.filter((contactItem) => {
        if (
          contactItem.firstName
            .toLowerCase()
            .includes(this.state.searchInputValue.toLowerCase()) ||
          contactItem.tag.toLowerCase() ===
            this.state.searchInputValue.toLowerCase()
        ) {
          return contactItem;
        }
      });

      this.setState({ ...this.state, data: newContacts, loading: false });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <>
        <Search
          onChange={this.handleSearchChange}
          onSubmit={this.handleSearchSubmit}
          placeholder="Ingresa el primer nombre"
        />
        <section className="contacts">
          <div className="contacts__table">
            <h4>Primer nombre</h4>
            <h4>Segundo nombre</h4>
            <h4>Apellido paterno</h4>
            <h4>Apellido materno</h4>
            <h4>Correo</h4>
            <h4>Prefijo</h4>
            <h4>Teléfono</h4>
            <h4>Celular</h4>
            <h4>Extensión</h4>
            <h4>Editar</h4>
          </div>
          {this.state.data.map((contactItem) => {
            return (
              <div className="contacts__table" key={contactItem._id}>
                <p>{contactItem.firstName}</p>
                {contactItem.secondName && <p>{contactItem.secondName}</p>}
                <p>{contactItem.firstLastname}</p>
                {contactItem.secondLastname && (
                  <p>{contactItem.secondLastname}</p>
                )}
                <p>{contactItem.email}</p>
                <p>{contactItem.prefix}</p>
                <p>{contactItem.phone}</p>
                <p>{contactItem.cellphone}</p>
                <p>{contactItem.extension}</p>
                <Link to={`/contact/${contactItem._id}/edit`}>
                  <FaPen />
                </Link>
              </div>
            );
          })}
          {this.state.loading && <Loading />}
        </section>
      </>
    );
  }
}

export default Contact;
