import React, { Fragment, useState } from "react";

function InputHeroes() {
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const body = { name };
      const response = await fetch("http://localhost:5000/jl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="pageHeader">Form the Justice League!</h1>
      <form className="addForm" onSubmit={onSubmit} id="inputForm">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
}

export default InputHeroes;
