import { faq } from "@/lib/seo";

export default function Perguntas() {
  return (
    <section id="duvidas" className="container perguntas">
      <div className="perguntas-intro">
        <h2 className="title">
          Perguntas <strong>frequentes</strong>
        </h2>
        <p>Dúvidas comuns de quem busca uma psicóloga para o luto em Rondonópolis.</p>
      </div>
      <div className="perguntas-lista">
        {faq.map((item) => (
          <details key={item.pergunta} className="pergunta">
            <summary>
              <h3>{item.pergunta}</h3>
            </summary>
            <p>{item.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
