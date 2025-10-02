import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Faq from "./pages/Faq";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import Login from "./pages/login.tsx";
import CorpoHumano from "./pages/corpohumano.tsx";
import Cadastro from "./pages/Cadastro.tsx";




export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/corpohumano" element={<CorpoHumano />} />
          <Route path="/Cadastro" element={<Cadastro />} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
}

