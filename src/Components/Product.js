import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "../Design/Product.css";

export const Product = ({ name, solved, handleChangeSolve, handleChangeRemove }) => {
  return (
    <article className="list-item">
      <input
        type="checkbox"
        checked={solved}
        onChange={(event) => {
          handleChangeSolve(event.target.checked);
        }}
      />
      <span>{name}</span>
      <TiDeleteOutline onClick={handleChangeRemove} />
    </article>
  );
};
