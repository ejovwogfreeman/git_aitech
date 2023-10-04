import React, { useState } from "react";

const Form = () => {
  //   let count = 0;
  //   let [count, setCount] = useState(0);
  //   const handleInc = () => {
  //     setCount((count += 1));
  //   };
  //   const handleDec = () => {
  //     setCount((count -= 1));
  //   };
  //   const handleRes = () => {
  //     setCount((count = 0));
  //   };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  const formStyle = {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      {/* <h1 style={{ color: count === 0 ? "blue" : count < 0 ? "red" : "green" }}>
        {count}
      </h1>
      <button onClick={handleDec}>decrease</button>
      <button onClick={handleRes}>reset</button>
      <button onClick={handleInc}>increase</button> */}
      <form action="" style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassord(e.target.value)}
          />
        </div>
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
