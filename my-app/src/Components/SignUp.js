import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(username);
    //console.log(email);
    //console.log(password);
    try {
      const body = { username, email, password };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      //window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/rostercreator" />;
  }

  return (
    <Fragment>
      <div className="sign-up-div">
        <h1 className="sign-up-header">
          Sign Up To Build Your Justice League Roster!
        </h1>
        <form className="sign-up-form" onSubmit={onSubmit}>
          <div className="sign-up-inputs">
            <label>Enter a username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>Enter an email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Enter a password</label>
            <input
              id="password"
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </Fragment>
  );
}

export default SignUp;
