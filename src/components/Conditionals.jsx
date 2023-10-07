import React from "react";
import { useState } from "react";

const Conditionals = () => {
  const user = "godbless";
  const [auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!auth);
  };
  return (
    <div className="container">
      <button onClick={handleAuth}>{auth ? "logout" : "login"}</button>
      <h1>{auth ? "Authenticated user" : "Not authenticated"}</h1>
      {/* <h1>{auth && user}</h1> */}
      <h1>{auth ? user : ""}</h1>
    </div>
  );
};

export default Conditionals;
