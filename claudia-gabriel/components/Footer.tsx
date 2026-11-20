import Link from "next/link";
import { site } from "@/lib/site";
import { servicos } from "@/lib/servicos";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <div>
            © {new Date().getFullYear()} {site.nome} · Psicóloga clínica · CRP {site.crp}
          </div>
          <div>
            Psicóloga em Rondonópolis – Mato Grosso · Especialista em perdas e luto · Presencial em
            Rondonópolis e online para todo o MT e o Brasil · WhatsApp {site.whatsapp}
          </div>
          <div>
            Este site não oferece atendimento de emergência. Em crise, ligue 188 (CVV) ou 192
            (SAMU).
          </div>
        </div>
        <nav className="footer-links" aria-label="Rodapé">
          {servicos.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`}>
              {s.nome}
            </Link>
          ))}
          <Link href="/blog">Blog sobre luto</Link>
          <a href={site.instagram.url} target="_blank" rel="noopener me">Instagram {site.instagram.handle}</a>
        </nav>
      </div>
    </footer>
  );
}
