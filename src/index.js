import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";

const authentication = () => {
  const sessionAut = localStorage.getItem("myData");
  if (sessionAut === "true") {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
};

authentication();
