import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestAutoestima from "./pages/TestAutoestima";
import Galeria from "./pages/Galeria";
import Foro from "./pages/Foro";
import Recursos from "./pages/Recursos";
import Navbar from "./components/Navbar";
import "./styles.css"; // Importar estilos

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-autoestima" element={<TestAutoestima />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
