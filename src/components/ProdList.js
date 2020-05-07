import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ProdList = (props) => (
  <div className="prod-list">
    {/* Hacemos un map a los datos para mostrarlos
        O mostrar un mensaje que no hay productos  */}

    {props.prods.length > 0 ? (
      props.prods.map((prod) => (
        <div key={prod.id} className="prod">
          <div className="prod-item">{prod.id}</div>
          <div className="prod-item">{prod.name}</div>
          <div className="prod-item">{prod.price}</div>
          <div className="prod-item action">
            <div
              onClick={() => {
                props.editRow(prod);
              }}
              className="btn-edit"
            >
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div onClick={() => props.deleteProd(prod.id)} className="btn-del">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>
        <p colSpan={3}>No hay productos</p>
      </div>
    )}
  </div>
);

export default ProdList;
