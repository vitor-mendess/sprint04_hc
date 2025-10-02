import React from "react";

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-6 py-16 bg-gray-50">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Sobre o Projeto
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Este projeto faz parte do <strong>Challenge FIAP</strong> em parceria
          com o <strong>IMREA - HCFMUSP</strong>. A proposta é desenvolver uma
          aplicação web que facilite o atendimento hospitalar, permitindo que
          pacientes iniciem seus agendamentos de forma prática e rápida,
          promovendo inclusão e acessibilidade digital.
        </p>
      </div>

      <div className="max-w-5xl space-y-12 text-gray-700">
        {/* Objetivo */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            🎯 Objetivo
          </h2>
          <p className="leading-relaxed">
            Criar uma plataforma que permita ao paciente <strong>indicar onde
            sente dor</strong> e receber orientações iniciais sobre como buscar
            atendimento. O sistema também organiza as informações para que a
            equipe médica tenha mais agilidade no processo.
          </p>
        </div>

        {/* Público-Alvo */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            👥 Público-Alvo
          </h2>
          <p className="leading-relaxed">
            Pacientes atendidos pelo hospital e instituições parceiras, com foco
            em <strong>facilidade de uso</strong>, especialmente para pessoas em
            situação de vulnerabilidade ou com pouca familiaridade com
            tecnologia.
          </p>
        </div>

        {/* Benefícios */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            ✅ Benefícios
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agilidade no agendamento de consultas.</li>
            <li>Interface simples, acessível e responsiva.</li>
            <li>Organização dos dados dos pacientes para o hospital.</li>
            <li>Maior autonomia para o usuário no processo de atendimento.</li>
          </ul>
        </div>

        {/* Equipe */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            👨‍💻 Equipe
          </h2>
          <p className="leading-relaxed">
            O desenvolvimento foi realizado pelos alunos da turma{" "}
            <strong>1TDS - Fevereiro</strong>, utilizando tecnologias modernas
            como <strong>React, Vite, TailwindCSS e React Router</strong>, além
            de boas práticas de UX/UI.
          </p>
        </div>
      </div>
    </section>
  );
}

