// import { useState } from "react";
import "./App.css";
import Comp from "./components/Comp";
import Skay from "./components/Skay";
import Event from "./components/Event";
import Conditionals from "./components/Conditionals";
import List from "./components/List";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  let name = "Skay";
  let age = 25;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/event" element={<Event />} />
        <Route path="/comp" element={<Comp />} />
        <Route path="/skay" element={<Skay name={name} age={age} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
