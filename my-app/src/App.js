import React, { Fragment } from "react";
import "./App.css";
import RosterCreator from "./Components/RosterCreator";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rostercreator" element={<RosterCreator />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
