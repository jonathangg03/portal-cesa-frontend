import React from "react";
import "../styles/pages/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">Portal Grupo CESA</h1>
      <div className="login__form">
        <p className="login__form-title">Inicio de sesión</p>
        <form action="" className="login__form-container">
          <input type="text" name="email" id="email" placeholder="Usuario" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
