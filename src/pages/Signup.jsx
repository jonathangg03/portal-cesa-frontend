import React, { Component } from "react";
import { Link } from "react-router-dom";
import sendData from "../utils/sendData";
import Loading from "../components/Loading";
import config from "../config";
import "../styles/pages/Login.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: "",
        email: "",
        password: "",
      },
      loading: false,
      error: null,
    };
  }
  handleFormValues = (e) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      await sendData(`${config.api}/api/user`, "POST", this.state.formValues);
      this.setState({ ...this.state, loading: false });
      this.props.history.push("/");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error });
    }
  };

  render() {
    return (
      <div className="login">
        <h1 className="login__title">Portal Grupo CESA</h1>
        <div className="login__form">
          <p className="login__form-title">Registro</p>
          <form
            action=""
            className="login__form-container"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre completo"
              required
              value={this.state.formValues.name}
              onChange={this.handleFormValues}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo"
              value={this.state.formValues.email}
              required
              onChange={this.handleFormValues}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={this.state.formValues.password}
              required
              onChange={this.handleFormValues}
            />
            <button type="submit">Registrarse</button>
          </form>
          <Link to="/">Iniciar sesion</Link>
          {this.state.loading && <Loading />}
          {this.state.error && (
            <p className="login__form-message">{this.state.error.message}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Signup;
