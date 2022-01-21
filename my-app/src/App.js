import React, { Fragment } from "react";
import "./App.css";
import RosterCreator from "./Components/RosterCreator";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rostercreator" element={<RosterCreator />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
