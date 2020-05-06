import React from "react";

const ProdList = (props) => (
  <div className="prod-list">
    {props.prods.length > 0 ? (
      props.prods.map((prod) => (
        <div key={prod.id} className="prod">
          <div className="prod-item id">{prod.id}</div>
          <div className="prod-item nombre-prod">{prod.name}</div>
          <div className="prod-item precio">{prod.price}</div>
          <div className="prod-item action">
            <button className="btn edit">Edit</button>
            <button className="btn edit">Del</button>
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
