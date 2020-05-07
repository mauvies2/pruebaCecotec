import React, { useState, useEffect } from "react";
import "./App.scss";
import ProdList from "./components/ProdList";
import AddProdForm from "./components/AddProdForm";
import EditProdForm from "./components/EditProdForm";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [prods, setProds] = useState(false);

  useEffect(() =>
    fetch("http://localhost:3004/product_list")
      .then((res) => res.json())
      .then((res) => this.setState({ prods: res }))
      .catch(() => this.setState({ hasErrors: true }))
  );

  // Agregamos el nuevo objeto (producto) a la array
  // de objetos previos

  const addProd = (prod) => {
    // prod.id = prods.length + 1;
    setProds([...prods, prod]);
  };

  // Borramos el producto con un filter del
  // resto de id
  const deleteProd = (id) => {
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

    setProds(prods.map((prod) => (prod.id === id ? updatedProd : prod)));
  };

  return (
    <div className="container">
      <h1>Inventario de productos</h1>
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
