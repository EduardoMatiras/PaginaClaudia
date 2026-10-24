import { site, whatsappLink } from "@/lib/site";
import { MailIcon, PinIcon, WhatsappIcon, WhatsappLogo } from "./icons";

export default function Contato() {
  const conversar = whatsappLink();

  return (
    <section id="contato" className="container contato-wrap">
      <div className="contato">
        <div className="contato-linhas" aria-hidden="true" />
        <div className="contato-conteudo">
          <div className="contato-texto">
            <h2 className="title">
              No luto, encontramos <strong>força</strong>.
            </h2>
            <p>Chegar até aqui já é um passo. Escreva quando se sentir à vontade.</p>
          </div>
          <div className="contato-formas">
            <div className="contato-formas-titulo">Formas de contato</div>
            <div className="contato-item">
              <WhatsappIcon />
              <span>
                <strong>WhatsApp:</strong>{" "}
                <a href={conversar} target="_blank" rel="noopener" className="contato-link">
                  {site.whatsapp}
                </a>
              </span>
            </div>
            <div className="contato-item">
              <MailIcon />
              <span>
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${site.email}`} className="contato-link">
                  {site.email}
                </a>
              </span>
            </div>
            <div className="contato-item">
              <PinIcon />
              <span>
                <strong>Consultório:</strong> {site.cidade}
              </span>
            </div>
          </div>
          <div className="contato-acao">
            <a
              href={conversar}
              className="btn btn-salvia btn-whatsapp"
              target="_blank"
              rel="noopener"
            >
              Vamos conversar?
              <WhatsappLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
