import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-3">Contato</h3>
        <p>📧 in.rea@hc.fm.usp.br</p>
        <p>📞 (11) 5549-2500</p>
        <p>📍 Rua Domingo de Soto, 100 – Vila Mariana – SP</p>
        <p className="mt-3 text-sm text-gray-200">
          © {new Date().getFullYear()} Projeto Saúde Digital – FIAP & IMREA-HCFMUSP
        </p>
      </div>
    </footer>
  );
}


