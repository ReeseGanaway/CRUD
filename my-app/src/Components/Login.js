import React, { Fragment, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userList, setUserList] = useState([]);
  const [emailFound, setEmailFound] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();

      setUserList(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  //console.log(userList);

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(username);
    //console.log(email);
    //console.log(password);
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let userListIndex = 0;
      while (emailFound === false && userListIndex <= userList.length - 1) {
        //console.log(userList[userListIndex].email);

        if (userList[userListIndex].email == email) {
          console.log("Im here!");
          console.log(userList[userListIndex].id);
          setUserId(userList[userListIndex].id);
          console.log(userId);
          setEmailFound(true);
          userListIndex++;
        } else {
          userListIndex++;
        }
      }
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
      <div className="NavBars">
        <Link className="Links" to="/signup">
          Sign Up
        </Link>
      </div>
      <div className="login-div">
        <h1 className="login-header">
          Log In To Build Your Justice League Roster!
        </h1>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-inputs">
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
          <button className="login-button">Log In</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
