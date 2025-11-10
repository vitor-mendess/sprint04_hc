import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../services/api" // ✅ importa a função que fala com a API

export default function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [erro, setErro] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")
    setMensagem("")

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!")
      return
    }

    try {
      // ✅ envia o cadastro para o backend Java (ajuste o endpoint conforme sua API)
      await post("/api/pacientes", {
        nome,
        email,
        senha,
      })

      setMensagem("Usuário cadastrado com sucesso!")
      setTimeout(() => navigate("/login"), 1500)
    } catch (error: any) {
      setErro("Erro ao cadastrar. Verifique o backend.")
      console.error("Erro no cadastro:", error)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Criar Conta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Crie uma senha"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          {/* Mensagens de sucesso ou erro */}
          {erro && <p className="text-red-600 text-center text-sm">{erro}</p>}
          {mensagem && <p className="text-green-600 text-center text-sm">{mensagem}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </section>
  )
}


