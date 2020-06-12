import React, { useState, useEffect } from "react";
import "./App.scss";
import ProdList from "./components/ProdList";
import AddProdForm from "./components/AddProdForm";
import EditProdForm from "./components/EditProdForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // const [hasError, setErrors] = useState(false);
  const [prods, setProds] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3004/product_list");
    res.json().then((res) => setProds(res));
    // .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const postRequest = (prod) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod),
    };
    fetch(
      "http://localhost:3004/product_list",
      requestOptions
    ).then((response) => response.json());
  };
  // Agregamos el nuevo objeto (producto) a la array
  // de objetos previos
  const updateRequest = (id, prod) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod),
    };
    fetch(
      `http://localhost:3004/product_list/${id}`,
      requestOptions
    ).then((response) => response.json());
  };

  const delRequest = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://localhost:3004/product_list/${id}`,
      requestOptions
    ).then((response) => response.json());
  };

  const addProd = (prod) => {
    postRequest(prod);
    setProds([...prods, prod]);
  };

  // Borramos el producto con un filter del
  // resto de id
  const deleteProd = (id) => {
    delRequest(id);
    setProds(prods.filter((prod) => prod.id !== id));
  };

  // Creamos un estado para saber si edit
  // esta activado o no
  const [editing, setEditing] = useState(false);

  //Creamos un estado inicial vacio para el form edit
  const initialFormState = { id: "", name: "", username: "" };

  const [currentProd, setCurrentProd] = useState(initialFormState);

  const editRow = (prod) => {
    setEditing(true);
    setCurrentProd({ id: prod.id, name: prod.name, price: prod.price });
  };

  const updateProd = (id, updatedProd) => {
    setEditing(false);
    updateRequest(id, updatedProd);
    setProds(prods.map((prod) => (prod.id === id ? updatedProd : prod)));
  };

  const signOut = () => {
    localStorage.removeItem("myData");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="header-crud">
        <h1>Inventario de productos</h1>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="btn-signout"
          onClick={signOut}
        />
      </div>
      <div className="prod-container">
        <div className="prod-tipo">
          <h3>Id</h3>
          <h3 className="nombre-prod">Producto</h3>
          <h3>Precio</h3>
          <h3>Acción</h3>
        </div>
        {editing ? (
          <EditProdForm
            setEditing={setEditing}
            currentProd={currentProd}
            updateProd={updateProd}
          />
        ) : (
          <AddProdForm addProd={addProd} />
        )}
        <ProdList prods={prods} editRow={editRow} deleteProd={deleteProd} />
      </div>
    </div>
  );
};

export default App;
