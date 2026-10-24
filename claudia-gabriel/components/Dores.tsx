import { ChatDotsIcon, ChatOffIcon, ClockIcon, EyeOffIcon, HeartIcon } from "./icons";

const dores = [
  { Icone: HeartIcon, texto: "Com uma saudade que não diminui." },
  { Icone: ChatDotsIcon, texto: "Com culpa pelo que foi dito ou deixou de ser." },
  { Icone: ClockIcon, texto: "Sob a pressa dos outros para você ficar bem." },
  { Icone: ChatOffIcon, texto: "Evitando o assunto para não preocupar ninguém." },
  { Icone: EyeOffIcon, texto: "Vivendo uma perda que ninguém parece ver." },
];

export default function Dores() {
  return (
    <section className="container">
      <div className="card dores">
        <div className="dores-intro">
          <h2 className="title">
            Talvez você sinta que o mundo <strong>seguiu sem você</strong>.
          </h2>
          <p>
            Por fora, a rotina continua. Por dentro, a perda ainda ocupa tudo. Não existe jeito
            certo de viver o luto, nem prazo para ele acabar.
          </p>
        </div>
        <div className="dores-grid">
          {dores.map(({ Icone, texto }) => (
            <div key={texto} className="dor">
              <div className="dor-icone">
                <Icone />
              </div>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
