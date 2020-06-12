import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  // const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const res = await fetch("https://localhost:3004/users");
    res.json().then((res) => setUsers(res));
    // .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const dataAuth = () => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    users.forEach((userPass) => {
      if (userPass.user === user && userPass.password === password) {
        localStorage.setItem("myData", true);
        window.location.reload();
      }
    });
  };

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
                id="user"
                type="text"
                className="user"
                placeholder="Usuario o correo electrónico"
              />
            </div>
            <div className="btn-data">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="password"
                type="password"
                className="password"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="btn-login" onClick={dataAuth}>
            Iniciar sesión
          </div>

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Recuerdame</p>
            </div>
            <div className="forgot">Olvidó su contraseña?</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
