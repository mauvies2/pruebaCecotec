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
      className="prod"
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
      <div className="prod-item action">
        <button className="btn">+</button>
        <button onClick={() => props.setEditing(false)} className="btn">
          x
        </button>
      </div>
    </form>
  );
};

export default EditProdForm;
