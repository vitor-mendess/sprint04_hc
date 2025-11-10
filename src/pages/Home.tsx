import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { get } from "../services/api"

// 👉 Exemplo de tipo para dados vindos da API Java (ajuste conforme seu backend)
type Paciente = {
  id: number
  nome: string
  email: string
}

export default function Home() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [erro, setErro] = useState<string>("")

  // ✅ Quando a página carregar, busca os dados da API Java
  useEffect(() => {
    get<Paciente[]>("/api/pacientes")
      .then(setPacientes)
      .catch((e) => setErro(e.message))
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Clique onde dói e agende <br /> seu atendimento!
        </h1>
        <p className="max-w-xl mx-auto text-lg text-blue-100 mb-6">
          Nosso sistema rápido e prático ajuda você a marcar uma consulta de
          acordo com seus sintomas.
        </p>
        <Link to="/corpohumano">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition">
            Iniciar atendimento
          </button>
        </Link>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Como funciona
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Clique na parte onde você sente dor para podermos marcar um atendimento
          para você. É simples, rápido e seguro.
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src="src/assets/corpohumano.png"
              alt="Corpo humano"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Por que usar nosso sistema?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Rápido e prático
            </h3>
            <p className="text-gray-600">
              Em poucos cliques você agenda seu atendimento sem filas e sem
              burocracia.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Atendimento personalizado
            </h3>
            <p className="text-gray-600">
              Cada consulta é direcionada para a especialidade certa, de acordo
              com sua dor.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              100% online
            </h3>
            <p className="text-gray-600">
              Agende sem sair de casa, de qualquer dispositivo com internet.
            </p>
          </div>
        </div>
      </section>

      {/* LISTA DE PACIENTES - Exemplo de integração com a API */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Pacientes cadastrados (dados da API Java)
        </h2>

        {erro && <p className="text-red-600 mb-4">{erro}</p>}

        {pacientes.length > 0 ? (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
            <ul className="divide-y">
              {pacientes.map((p) => (
                <li key={p.id} className="py-2 text-gray-700">
                  <strong>{p.nome}</strong> — {p.email}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          !erro && (
            <p className="text-gray-500">
              Nenhum paciente cadastrado encontrado (verifique sua API Java).
            </p>
          )
        )}
      </section>

      {/* CONTATO */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Precisa de ajuda?
        </h2>
        <p className="text-gray-600 mb-8">
          Entre em contato com nossa equipe de suporte.
        </p>
        <Link to="/contato">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Fale Conosco
          </button>
        </Link>
      </section>
    </div>
  )
}


