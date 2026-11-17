import { site, whatsappLink } from "@/lib/site";
import { CheckIcon, VideoCallIcon, WhatsappLogo } from "./icons";

export default function ComoAjudar() {
  return (
    <section id="como-ajudar" className="container" aria-label="Como a terapia ajuda no luto">
      <div className="card ajudar">
        <div className="ajudar-intro">
          <h2 className="title">
            Como posso <strong>ajudar</strong>
          </h2>
          <div className="cta">
            <a href={whatsappLink()} className="btn btn-whatsapp" target="_blank" rel="noopener">
              Vamos conversar?
              <WhatsappLogo />
            </a>
            <div className="cta-note">
              <VideoCallIcon />
              {site.modalidade}
            </div>
          </div>
        </div>
        <ul className="checklist">
          <li>
            <CheckIcon />
            <span>
              <strong>Compreender</strong> as reações do luto e por que elas vêm em ondas.
            </span>
          </li>
          <li>
            <CheckIcon />
            <span>
              Olhar para a <strong>culpa</strong> e para os pensamentos que aumentam o sofrimento.
            </span>
          </li>
          <li>
            <CheckIcon />
            <span>
              <strong>Falar</strong> sobre quem partiu, em um espaço onde a lembrança é bem-vinda.
            </span>
          </li>
          <li>
            <CheckIcon />
            <span>
              Atravessar <strong>datas difíceis</strong> e retomar a rotina aos poucos.
            </span>
          </li>
          <li>
            <CheckIcon />
            <span>
              Encontrar novas formas de <strong>lembrar e honrar</strong>.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
