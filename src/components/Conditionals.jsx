import React from "react";
import { useState } from "react";

const Conditionals = () => {
  const user = false;
  const [auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!auth);
  };
  return (
    <div>
      <button onClick={handleAuth}>{auth ? "logout" : "login"}</button>
      <h1>{auth ? "Authenticated user" : "Not authenticated"}</h1>
    </div>
  );
};

export default Conditionals;
