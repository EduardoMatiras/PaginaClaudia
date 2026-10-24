import Image from "next/image";
import fotoPrincipal from "@/public/claudia-principal.webp";
import { site, whatsappLink } from "@/lib/site";
import { CheckIcon, WhatsappLogo, VideoCallIcon } from "./icons";

export default function Hero() {
  const agendar = whatsappLink();

  return (
    <section id="topo" className="hero">
      <div className="hero-bg">
        <Image
          src={fotoPrincipal}
          alt="Claudia Gabriel, psicóloga especialista em perdas e luto em Rondonópolis, sentada em uma poltrona no consultório"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      </div>
      <div className="hero-conteudo">
        <div className="hero-texto">
          <h1 className="hero-eyebrow">
            Psicóloga especialista em perdas e luto em Rondonópolis – MT
          </h1>
          <p className="hero-frase">
            Sua dor não precisa ser vivida <strong>em silêncio</strong>.
          </p>
          <p>
            Um espaço <strong>seguro, acolhedor e livre de julgamentos</strong> para quem perdeu
            alguém ou algo importante e sente que a vida ainda não voltou ao lugar.
          </p>
          <ul className="checklist">
            <li>
              <CheckIcon />
              <span>
                Atendimento <strong>individual</strong> para adultos e adolescentes, que respeita seu tempo e seu processo.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Práticas <strong>baseadas em evidências</strong>, pela Terapia
                Cognitivo-Comportamental.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Especialização em <strong>luto e perdas</strong>.
              </span>
            </li>
          </ul>
          <div className="cta">
            <a
              href={agendar}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener"
            >
              Agendar atendimento
              <WhatsappLogo />
            </a>
            <div className="cta-note">
              <VideoCallIcon />
              {site.modalidade}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
