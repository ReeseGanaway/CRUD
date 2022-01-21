import React, { Fragment, useState } from "react";
import InputHeroes from "./InputHeroes";
import ListHeroes from "./ListHeroes";

function RosterCreator() {
  return (
    <Fragment>
      <div className="container">
        <InputHeroes />
        <ListHeroes />
      </div>
    </Fragment>
  );
}

export default RosterCreator;
