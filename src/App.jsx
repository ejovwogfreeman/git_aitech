import { useState } from "react";
import "./App.css";
// import Comp from "./components/Comp";
// import Skay from "./components/Skay";
// import Event from "./components/Event";
import Conditionals from "./components/Conditionals";

function App() {
  let name = "Skay";
  let age = 25;

  return (
    <>
      <Conditionals />
      {/* <Event /> */}
      {/* <Comp />
      <Skay name={name} age={age} /> */}
    </>
  );
}

export default App;
