import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/pages/Login.scss";

const Login = () => {
  // const history = useHistory("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [jwt, setJwt] = useState(true);

  const handleFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:3000/api/auth",
      formValues
    );
    console.log(result.data.body);
    if (result.data.body.length > 0) {
      setJwt(result.data.body);
      localStorage.setItem("session", result.data.body);
      localStorage.setItem("email", formValues.email);
      setTimeout(location.reload(), 1000);
    } else {
      console.log(false);
      setJwt(false);
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Portal Grupo CESA</h1>
      <div className="login__form">
        <p className="login__form-title">Inicio de sesión</p>
        <form
          action=""
          className="login__form-container"
          onSubmit={handleSubmit}
        >
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
          <button type="submit">Ingresar</button>
        </form>
        {!jwt && <p>Usuario o contraseña invalidos</p>}
        <Link to="/signup">Registrarse</Link>
      </div>
    </div>
  );
};

export default Login;
