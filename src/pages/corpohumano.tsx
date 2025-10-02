import React, { useState } from "react";

type BodyPart = "Cabeça" | "Braço" | "Peito" | "Perna" | null;

export default function Resolucao() {
  const [selectedPart, setSelectedPart] = useState<BodyPart>(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [agendado, setAgendado] = useState(false);

  const handleSelect = (part: BodyPart) => {
    setSelectedPart(part);
    setAgendado(false); // reseta se o usuário mudar a parte do corpo
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAgendado(true);
  };

  // Lista de horários disponíveis
  const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00"
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Onde está a dor?
        </h1>
        <p className="text-gray-600 mb-6">
          Clique na região do corpo humano para agendar uma consulta.
        </p>

        {/* Botões do corpo humano */}
        <div className="grid grid-cols-2 gap-6 justify-center items-center mb-8">
          <button
            onClick={() => handleSelect("Cabeça")}
            className="bg-white border rounded-xl p-6 shadow hover:bg-blue-50"
          >
            Cabeça
          </button>
          <button
            onClick={() => handleSelect("Braço")}
            className="bg-white border rounded-xl p-6 shadow hover:bg-blue-50"
          >
            Braço
          </button>
          <button
            onClick={() => handleSelect("Peito")}
            className="bg-white border rounded-xl p-6 shadow hover:bg-blue-50"
          >
            Peito
          </button>
          <button
            onClick={() => handleSelect("Perna")}
            className="bg-white border rounded-xl p-6 shadow hover:bg-blue-50"
          >
            Perna
          </button>
        </div>

        {/* Formulário ou confirmação */}
        {selectedPart && !agendado && (
          <div className="mt-6 bg-white border rounded-xl shadow-lg p-6 max-w-md mx-auto text-left">
            <h2 className="text-xl font-semibold text-blue-700 mb-3 text-center">
              Agendamento de Consulta
            </h2>
            <p className="mb-4 text-gray-600 text-center">
              Região selecionada: <span className="font-bold">{selectedPart}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <textarea
                placeholder="Observações sobre a dor"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
              ></textarea>

              <div className="flex gap-4">
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="w-1/2 border rounded-lg px-3 py-2"
                  required
                />
                <select
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  className="w-1/2 border rounded-lg px-3 py-2"
                  required
                >
                  <option value="">Selecione um horário</option>
                  {horariosDisponiveis.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>
        )}

        {/* Mensagem de confirmação */}
        {agendado && (
          <div className="mt-6 bg-green-100 border border-green-300 rounded-xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold text-green-700 mb-3 text-center">
              ✅ Consulta Agendada!
            </h2>
            <p className="text-gray-700 text-center">
              Sua consulta para <span className="font-bold">{selectedPart}</span>{" "}
              foi agendada com sucesso.
            </p>
            <p className="text-gray-700 text-center mt-2">
              📅 Data: <span className="font-bold">{data}</span> <br />
              ⏰ Horário: <span className="font-bold">{hora}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

