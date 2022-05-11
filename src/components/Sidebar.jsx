import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={require("../img/Logo-WQ.png")}
        className="imgLogo"
        alt="Logo Wild Queen"
      />

      <button className="barText btnBar">Desayuno</button>
      <button className="barText btnBar">Almuerzo</button>
      <div>
        <h4 className="barText">Cliente</h4>
        <input type="text" className="inputCliente" />
      </div>
    </div>
  );
}

export default Sidebar;

//Stateless funcional component (sfc)
