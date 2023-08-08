import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Footer";
import Sponsorship from "./pages/Sponsorship";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
