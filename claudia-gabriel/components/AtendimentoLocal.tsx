import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { servicos } from "@/lib/servicos";
import { PinIcon, VideoCallIcon, WhatsappLogo } from "./icons";

// Seção de SEO local: deixa explícito para o Google e para as IAs onde e para quem é o atendimento.
export default function AtendimentoLocal() {
  return (
    <section id="rondonopolis" className="container">
      <div className="card local">
        <div className="local-intro">
          <h2 className="title">
            Psicóloga em <strong>Rondonópolis</strong> e em todo o Mato Grosso
          </h2>
          <p>
            Meu consultório fica em <strong>Rondonópolis – MT</strong>, onde atendo adultos e
            adolescentes presencialmente. Para quem mora em outras cidades de Mato Grosso ou do
            Brasil, o acompanhamento psicológico também acontece <strong>online</strong>, por
            videochamada, com o mesmo cuidado e sigilo.
          </p>
          <nav className="local-servicos" aria-label="Atendimentos">
            {servicos.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>
                {s.titulo}
              </Link>
            ))}
          </nav>
          <div className="cta">
            <a
              href={whatsappLink("Olá Claudia, vim do site e quero saber sobre o atendimento.")}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener"
            >
              Agendar em Rondonópolis ou online
              <WhatsappLogo />
            </a>
          </div>
        </div>
        <div className="local-cidades">
          <div>
            <h3>
              <PinIcon color="currentColor" /> Presencial em Rondonópolis
            </h3>
            <p>Também recebo pacientes da região Sul de Mato Grosso, como:</p>
            <ul>
              {site.cidadesProximas.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>
              <VideoCallIcon /> Online em Mato Grosso e no Brasil
            </h3>
            <p>Psicoterapia online para quem está em:</p>
            <ul>
              {site.cidadesOnline.map((c) => (
                <li key={c}>{c}</li>
              ))}
              <li>e outras cidades</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
