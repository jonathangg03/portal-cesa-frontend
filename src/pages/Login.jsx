import React, { Component } from "react";
import { Link } from "react-router-dom";
import sendData from "../utils/sendData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      formValues: {
        email: "",
        password: "",
      },
      loading: false,
      error: null,
    };
  }

  handleFormValues = (event) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true, error: null });
    try {
      const { email, password } = this.state.formValues;
      const result = await sendData(`${config.api}/api/auth`, "POST", {
        email,
        password,
      });
      console.log(result);
      if (result && result.body.length > 0) {
        localStorage.setItem("email", email);
        this.setState({ ...this.state, loading: false, error: null });
        location.reload();
      }
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <div className="login">
        <h1 className="login__title">Portal Grupo CESA</h1>
        <div className="login__form">
          <p className="login__form-title">Inicio de sesión</p>
          <form
            action=""
            className="login__form-container"
            onSubmit={this.handleSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo"
              required
              value={this.state.email}
              onChange={this.handleFormValues}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              required
              value={this.state.password}
              onChange={this.handleFormValues}
            />
            <button type="submit">Iniciar sesión</button>
          </form>
          <Link to="/signup">Registrarse</Link>
          {this.state.loading && <Loading />}
          {this.state.error && (
            <p className="login__form-message">{this.state.error}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
