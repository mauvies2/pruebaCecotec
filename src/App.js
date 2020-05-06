import React, { useState } from "react";
import "./App.scss";
import ProdList from "./components/ProdList";
import AddProdForm from "./components/AddProdForm";

const App = () => {
  const prodsData = [
    { id: 1, name: "Tania", price: "299" },
    { id: 2, name: "Craig", price: "100" },
    { id: 3, name: "Ben", price: "150" },
  ];

  const [prods, setProds] = useState(prodsData);

  const addProd = (prod) => {
    // prod.id = prods.length + 1;
    setProds([...prods, prod]);
  };

  return (
    <div className="container">
      <h1>Inventario de productos</h1>
      <div className="prod-container">
        <div className="prod-tipo">
          <h3>Id</h3>
          <h3 className="nombre-prod">Producto</h3>
          {/* <h3>Unidades</h3> */}
          <h3>Precio</h3>
          <h3>Acción</h3>
        </div>
        <AddProdForm addProd={addProd} />
        <ProdList prods={prods} />
      </div>
    </div>
  );
};

export default App;
