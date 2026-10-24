import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <div>
            © {new Date().getFullYear()} {site.nome} · Psicóloga clínica · CRP {site.crp}
          </div>
          <div>Psicóloga em Rondonópolis – MT · Especialista em perdas e luto · Atendimento presencial e online</div>
          <div>
            Este site não oferece atendimento de emergência. Em crise, ligue 188 (CVV) ou 192
            (SAMU).
          </div>
        </div>
        <a href={site.instagram.url} target="_blank" rel="noopener me">Instagram {site.instagram.handle}</a>
      </div>
    </footer>
  );
}
