import React from "react";
import "../styles/menuContainer.css";
import Menu from "../menu.json";

function MenuContainer() {
  return (
    <div className="container row">
      <div className=" itemContainer .col-8">
        <h3>Plato</h3>
        {Menu.map((plato) => {
          return (
            <div className="itemContainer" key={plato.id}>
              {plato.item}
            </div>
          );
        })}
      </div>
      <div className="itemContainer .col-2">
        <h3>Precio</h3>
        {Menu.map((plato) => {
          return (
            <div className="itemContainer" key={plato.id}>
              {plato.cost}
            </div>
          );
        })}
      </div>
      <div className="itemContainer .col-2">
        <h3>Cantidad</h3>
      </div>
    </div>
  );
}

export default MenuContainer;
