import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import foto from "@/public/claudia-principal.webp";
import { site, whatsappLink } from "@/lib/site";
import {
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  MicIcon,
  PinIcon,
  VideoCallIcon,
  WhatsappLogo,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Agende sua consulta com a psicóloga Claudia Gabriel, especialista em perdas e luto em Rondonópolis – MT. Palestras, rodas de conversa e atendimento presencial e online.",
  alternates: { canonical: "/links" },
  // Página de apoio ao Instagram: não compete com a página principal no Google
  robots: { index: false, follow: true },
};

const agendar = whatsappLink("Olá Claudia, vim do Instagram, quero fazer um agendamento.");
const palestras = whatsappLink(
  "Olá Claudia, vim do Instagram, gostaria de um orçamento para palestra ou roda de conversa."
);

export default function Links() {
  return (
    <main className="links">
      <div className="links-linhas" aria-hidden="true" />

      <div className="links-conteudo">
        <Image src={logo} alt="Claudia Gabriel" className="links-logo" priority />

        <div className="links-foto">
          <Image
            src={foto}
            alt="Psicóloga Claudia Gabriel em seu consultório em Rondonópolis"
            fill
            priority
            sizes="280px"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              transform: "scale(1.9)",
              transformOrigin: "52% 16%",
            }}
          />
        </div>

        <div className="links-perfil">
          <h1>
            Psicóloga <strong>Claudia Gabriel</strong>
          </h1>
          <p className="links-local">
            <PinIcon color="currentColor" />
            Rondonópolis – MT · CRP {site.crp}
          </p>
          <ul className="links-tags">
            <li>Psicóloga clínica</li>
            <li>Perdas e luto</li>
            <li>Palestrante</li>
          </ul>
        </div>

        <p className="links-frase">A dor só passa quando passamos por ela.</p>

        <nav className="links-botoes" aria-label="Links">
          <a href={agendar} target="_blank" rel="noopener" className="btn btn-whatsapp links-btn">
            Agendar consulta
            <WhatsappLogo />
          </a>
          <a href={palestras} target="_blank" rel="noopener" className="links-card">
            <span className="links-card-icone">
              <MicIcon />
            </span>
            <span>
              <strong>Palestras e rodas de conversa</strong>
              <small>Solicite um orçamento</small>
            </span>
          </a>
          <Link href="/" className="links-card">
            <span className="links-card-icone">
              <GlobeIcon />
            </span>
            <span>
              <strong>Conheça meu trabalho</strong>
              <small>Site com tudo sobre o atendimento</small>
            </span>
          </Link>
        </nav>

        <div className="links-nota">
          <VideoCallIcon />
          {site.modalidade}
        </div>

        <div className="links-redes">
          <a href={site.instagram.url} target="_blank" rel="noopener me" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={agendar} target="_blank" rel="noopener" aria-label="WhatsApp">
            <WhatsappLogo />
          </a>
          <a href={`mailto:${site.email}`} aria-label="E-mail">
            <MailIcon color="currentColor" />
          </a>
        </div>

        <p className="links-rodape">
          Este perfil não oferece atendimento de emergência. Em crise, ligue 188 (CVV) ou 192 (SAMU).
        </p>
      </div>
    </main>
  );
}
