import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";
// import sendData from "../utils/sendData";
import config from "../config";
import "../styles/pages/New.scss";

class DocumentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      if (event.target[1].files) {
        const fd = new FormData();
        fd.append("name", event.target[0].value);
        fd.append("fileD", event.target[1].files[0]);
        fd.append("user", localStorage.getItem("email"));
        await axios.post(`${config.api}/api/document`, fd);
        this.setState({ ...this.state, loading: false });
        this.props.history.push("/document");
      }
    } catch (error) {
      console.log(error);
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <section className="add">
        <h3>AGREGAR UN NUEVO DOCUMENTO</h3>
        <form
          action="/api/document"
          method="POST"
          encType="multipart/form-data"
          id="add__form"
          className="add__form"
          onSubmit={this.handleFormSubmit}
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
        {this.state.loading && <Loading />}
      </section>
    );
  }
}

export default DocumentNew;
