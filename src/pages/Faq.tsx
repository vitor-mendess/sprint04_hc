import React from "react";

export default function Faq() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
          Perguntas Frequentes (FAQ)
        </h1>

        <div className="space-y-6">
          {/* Pergunta 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Como agendo um atendimento?
            </h3>
            <p className="text-gray-700">
              Basta clicar em <strong>“Iniciar atendimento”</strong> na página inicial,
              escolher a área do corpo onde sente dor e preencher o formulário de
              contato.
            </p>
          </div>

          {/* Pergunta 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Preciso levar documentos no dia do atendimento?
            </h3>
            <p className="text-gray-700">
              Sim, é importante levar um documento com foto e, se possível, o cartão
              do SUS para facilitar seu cadastro.
            </p>
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              O sistema funciona em celular?
            </h3>
            <p className="text-gray-700">
              Sim! O site é <strong>100% responsivo</strong>, você pode acessar tanto no
              celular quanto no computador.
            </p>
          </div>

          {/* Pergunta 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Quem pode usar essa plataforma?
            </h3>
            <p className="text-gray-700">
              Qualquer paciente atendido pelo hospital e instituições parceiras
              pode utilizar para iniciar seu processo de agendamento.
            </p>
          </div>

          {/* Pergunta 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Minhas informações ficam seguras?
            </h3>
            <p className="text-gray-700">
              Sim, os dados são utilizados apenas para organizar o atendimento e
              não são compartilhados com terceiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

