import React, { useState } from "react";

const AddProdForm = (props) => {
  const initialFormState = { id: "", name: "", price: "" };
  const [prod, setProd] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProd({ ...prod, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!prod.id || !prod.name || !prod.price) return;
        props.addProd(prod);
        setProd(initialFormState);
      }}
      className="prod"
    >
      <input
        className="add-prod-input"
        type="text"
        name="id"
        value={prod.id}
        placeholder="Id..."
        onChange={handleInputChange}
      />
      <input
        className="add-prod-input"
        type="text"
        name="name"
        value={prod.name}
        placeholder="Prod..."
        onChange={handleInputChange}
      />
      <input
        className="add-prod-input"
        type="text"
        name="price"
        value={prod.price}
        placeholder="Precio..."
        onChange={handleInputChange}
      />
      <button className="add-prod-input btn add">+</button>
    </form>
  );
};

export default AddProdForm;
