import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  // const [hasError, setErrors] = useState(false);
  // const [users, setUser] = useState({});

  // useEffect(() =>
  //   fetch("http://localhost:3004/users")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ users: res }))
  //     .catch(() => this.setState({ hasErrors: true }))
  // );

  return (
    <div className="login">
      <div className="containerLog">
        <div className="header">
          <p>Inicio de sesión</p>
        </div>
        <section className="main">
          <div className="data">
            <div className="btn-data">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                className="user"
                placeholder="Usuario o correo electrónico"
                oninput="typeButton()"
              />
              <div id="close-icon-user" className="close-icon-user">
                <FontAwesomeIcon icon={faTimes} className="icon" />
              </div>
            </div>
            <div className="btn-data">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="close-icon-btn"
                type="text"
                className="password"
                placeholder="Contraseña"
                oninput="typeButton2()"
              />
              <div id="close-icon-password" className="close-icon-password">
                <FontAwesomeIcon icon={faTimes} className="icon" />
              </div>
            </div>
          </div>

          <div className="btn-login">
            <a href="#" className="btn-login">
              Iniciar sesión
            </a>
          </div>

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Recuerdame</p>
            </div>
            <div className="forgot">
              <a href="#">Olvidó su contraseña?</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
