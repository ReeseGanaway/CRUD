import React, { Fragment } from "react";
import "./App.css";
import InputHeroes from "./Components/InputHeroes";
import ListHeroes from "./Components/ListHeroes";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputHeroes />
        <ListHeroes />
      </div>
    </Fragment>
  );
}

export default App;
