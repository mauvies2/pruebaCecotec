import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

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
      <div className="add-prod action">
        <button>
          <FontAwesomeIcon icon={faPlusSquare} className="btn-add" />
        </button>
        <FontAwesomeIcon
          icon={faWindowClose}
          className="btn-cancel"
          onClick={() => props.setEditing(false)}
        />
      </div>
    </form>
  );
};

export default EditProdForm;
