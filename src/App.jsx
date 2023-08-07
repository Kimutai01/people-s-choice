import { useState } from "react";

import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
