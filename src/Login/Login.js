import React from "react";
import "./Login.css";
function Login(props) {
  return (
    <div className="login">
      <img src={props.src} alt="#"></img>
      <button onClick={props.loginFunction}>LOGIN</button>
    </div>
  );
}

export default Login;
