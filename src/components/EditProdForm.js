import React, { useState, useEffect } from "react";

const EditProdForm = (props) => {
  const [prod, setProd] = useState(props.currentProd);
  useEffect(() => {
    setProd(props.currentProd);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProd({ ...prod, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateProd(prod.id, prod);
      }}
      className="produ"
    >
      <input
        className="edit-prod-input"
        type="text"
        name="id"
        value={prod.id}
        placeholder="Id..."
        onChange={handleInputChange}
      />
      <input
        className="edit-prod-input"
        type="text"
        name="name"
        value={prod.name}
        placeholder="Prod..."
        onChange={handleInputChange}
      />
      <input
        className="edit-prod-input"
        type="text"
        name="price"
        value={prod.price}
        placeholder="Precio..."
        onChange={handleInputChange}
      />
      <button>Editar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="edit-prod-input btn add button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProdForm;
