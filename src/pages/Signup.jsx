import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import "../styles/pages/Login.scss";

const Signup = () => {
  const history = useHistory("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user", formValues)
      .then(() => history.push("/login"));
  };

  return (
    <div className="login">
      <h1 className="login__title">Portal Grupo CESA</h1>
      <div className="login__form">
        <p className="login__form-title">Registro</p>
        <form
          action=""
          className="login__form-container"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
            onChange={handleFormValues}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo"
            required
            onChange={handleFormValues}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            required
            onChange={handleFormValues}
          />
          <button type="submit">Registrarse</button>
        </form>
        <Link to="/">Iniciar sesion</Link>
      </div>
    </div>
  );
};

export default Signup;
