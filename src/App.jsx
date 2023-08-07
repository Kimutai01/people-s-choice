import { useState } from "react";

import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <h1>Hello There, we are building something awesome!</h1>
    </div>
  );
}

export default App;
