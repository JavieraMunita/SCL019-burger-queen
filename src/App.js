import React from "react";
import Sidebar from "./components/Sidebar";
import MenuContainer from "./components/MenuContainer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <MenuContainer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
