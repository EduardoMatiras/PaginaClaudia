import Link from "next/link";
import { site } from "@/lib/site";

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
          <Link href="/blog">Blog sobre luto</Link>
          <a href={site.instagram.url} target="_blank" rel="noopener me">Instagram {site.instagram.handle}</a>
        </nav>
      </div>
    </footer>
  );
}
