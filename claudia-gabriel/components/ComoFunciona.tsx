import { site } from "@/lib/site";

const passos = [
  {
    titulo: "Primeiro contato",
    texto: "Você escreve pelo WhatsApp, conhece o atendimento e vê os horários.",
  },
  {
    titulo: "Primeira sessão",
    texto: "Conversamos sobre sua história, sua perda e o que fez você buscar apoio.",
  },
  {
    titulo: "Acompanhamento",
    texto: `Sessões individuais de ${site.duracaoSessao}, no seu ritmo e com sigilo.`,
  },
];

export default function ComoFunciona() {
  return (
    <section id="atendimento" className="container funciona">
      <div className="funciona-intro">
        <h2 className="title">
          Como <strong>funciona</strong>
        </h2>
        <p>Começar pode ser mais simples do que parece.</p>
      </div>
      <div className="passos">
        {passos.map((p, i) => (
          <div key={p.titulo} className="passo">
            <div className="passo-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
