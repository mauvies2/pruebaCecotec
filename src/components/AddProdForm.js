import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const AddProdForm = (props) => {
  //
  // Creamos un estado inicial vacio
  const initialFormState = { id: "", name: "", price: "" };
  const [prod, setProd] = useState(initialFormState);
  //
  // Con event obtenemos el valor del objeto
  // en cuestión
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Seteamos los valores del nuevo producto
    setProd({ ...prod, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        //
        // No aceptamos campos vacios
        if (!prod.id || !prod.name || !prod.price) return;

        // Agregamos el nuevo producto al objeto
        props.addProd(prod);

        // Vaciamos el form
        setProd(initialFormState);

        //// No hay que preocuparse por async calls
      }}
      className="prod"
    >
      <div className="add-prod">
        <input
          className="add-prod input"
          type="text"
          name="id"
          value={prod.id}
          placeholder="Id..."
          onChange={handleInputChange}
        />
      </div>
      <div className="add-prod">
        <input
          className="add-prod input"
          type="text"
          name="name"
          value={prod.name}
          placeholder="Prod..."
          onChange={handleInputChange}
        />
      </div>
      <div className="add-prod">
        <input
          className="add-prod input"
          type="text"
          name="price"
          value={prod.price}
          placeholder="Precio..."
          onChange={handleInputChange}
        />
      </div>
      <button className="add-prod">
        <FontAwesomeIcon icon={faPlusSquare} className="btn-add" />
      </button>
    </form>
  );
};

export default AddProdForm;
