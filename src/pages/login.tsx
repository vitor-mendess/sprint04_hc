import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [rm, setRm] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { rm, password });
    // aqui depois você pode integrar com backend ou localStorage
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="text"
              value={rm}
              onChange={(e) => setRm(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite seu E-mail"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            Entrar
          </button>

          {/* Link para a página de cadastro */}
          <div className="text-sm text-center mt-4">
            <button
              type="button"
              onClick={() => navigate("/cadastro")}
              className="text-blue-600 hover:underline"
            >
              Não tem conta? Cadastre-se aqui
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

