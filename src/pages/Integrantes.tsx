import React from "react";

type Member = {
  name: string;
  rm: string;
  turma: string;
  photo: string;
  linkedin: string;
  github: string;
};

const MEMBERS: Member[] = [
  {
    name: "Vitor Mendes da Silva",
    rm: "565376",
    turma: "1TDSA",
    photo: "src/assets/Foto-vitor.jpeg",
    linkedin: "https://www.linkedin.com/in/vitor-mendess/",
    github: "https://github.com/vitor-mendess",
  },
  {
    name: "Aguinel Junior Bento da Silva",
    rm: "564857",
    turma: "1TDSA",
    photo: "src/assets/Foto-aguinel.jpeg",
    linkedin: "https://www.linkedin.com/in/aguinel-silva-657165368/",
    github: "https://github.com/aguinelito",
  },
  {
    name: "Leonardo Saavedra de Souza Campos",
    rm: "562229",
    turma: "1TDSA",
    photo: "src/assets/foto-leo.png",
    linkedin: "https://www.linkedin.com/in/leonardo-saavedra-de-souza-campos-a67179356",
    github: "https://github.com/Leonardo-Saavedra",
  },
];

export default function Integrantes() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Integrantes</h1>
        <p className="text-gray-600 mb-6">
          Identificação completa dos integrantes: nome, RM, turma e links de perfil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m) => (
            <div
              key={m.rm}
              className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition flex flex-col items-center text-center"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow"
              />
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-gray-600">
                RM: <span className="font-medium">{m.rm}</span>
              </p>
              <p className="text-sm text-gray-600">
                Turma: <span className="font-medium">{m.turma}</span>
              </p>

              {/* Links em texto */}
              <div className="mt-3 flex flex-col space-y-1">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
