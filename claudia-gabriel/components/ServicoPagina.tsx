import type { Metadata } from "next";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { VideoCallIcon, WhatsappLogo } from "./icons";
import { buscarPost } from "@/lib/blog";
import { buscarServico, servicos } from "@/lib/servicos";
import { jsonLdScript, servicoJsonLd } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export function metadataServico(slug: string): Metadata {
  const s = buscarServico(slug);
  return {
    title: { absolute: s.tituloSeo },
    description: s.descricao,
    keywords: s.palavrasChave,
    alternates: { canonical: `/${s.slug}` },
    openGraph: {
      type: "website",
      url: `/${s.slug}`,
      title: s.tituloSeo,
      description: s.descricao,
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: s.titulo }],
    },
  };
}

export default function ServicoPagina({ slug }: { slug: string }) {
  const s = buscarServico(slug);
  const agendar = whatsappLink(s.mensagemWhatsapp);
  const artigos = s.artigos.map(buscarPost).filter((p) => p !== undefined);
  const outros = servicos.filter((x) => x.slug !== s.slug);

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(servicoJsonLd(s))} />
      <Header />
      <main className="container artigo">
        <nav className="migalhas" aria-label="Você está em">
          <Link href="/">Início</Link> <span aria-hidden="true">/</span> <span>{s.nome}</span>
        </nav>

        <article>
          <header className="artigo-cabecalho">
            <h1 className="title">{s.titulo}</h1>
            <p className="blog-meta">
              Claudia Gabriel · Psicóloga clínica · CRP {site.crp} · Especialista em perdas e luto
            </p>
          </header>

          <p className="artigo-resumo">{s.resumo}</p>

          <div className="cta servico-cta">
            <a href={agendar} className="btn btn-whatsapp" target="_blank" rel="noopener">
              Agendar pelo WhatsApp
              <WhatsappLogo />
            </a>
            <div className="cta-note">
              <VideoCallIcon />
              {site.modalidade}
            </div>
          </div>

          <div className="artigo-corpo">
            {s.secoes.map((secao) => (
              <section key={secao.titulo}>
                <h2>{secao.titulo}</h2>
                {secao.paragrafos?.map((p) => <p key={p}>{p}</p>)}
                {secao.lista && (
                  <ul>
                    {secao.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {secao.depois?.map((p) => <p key={p}>{p}</p>)}
              </section>
            ))}

            <section>
              <h2>Perguntas frequentes</h2>
              {s.faq.map((f) => (
                <div key={f.pergunta} className="artigo-faq">
                  <h3>{f.pergunta}</h3>
                  <p>{f.resposta}</p>
                </div>
              ))}
            </section>

            {artigos.length > 0 && (
              <section>
                <h2>Para ler no blog</h2>
                <ul>
                  {artigos.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="card artigo-autora servico-final">
            <div>
              <p className="artigo-autora-nome">Vamos conversar?</p>
              <p>
                Escreva quando se sentir à vontade. Explico como funciona o atendimento e vemos juntos
                o melhor horário, presencial em Rondonópolis ou online.
              </p>
              <a href={agendar} className="btn btn-whatsapp" target="_blank" rel="noopener">
                {site.whatsapp}
                <WhatsappLogo />
              </a>
            </div>
          </div>

          <p className="artigo-aviso">
            Este site não oferece atendimento de emergência. Em crise, ligue 188 (CVV) ou 192 (SAMU).
          </p>
        </article>

        <nav className="artigo-outros" aria-label="Outros atendimentos">
          <h2 className="title">
            Outros <strong>atendimentos</strong>
          </h2>
          <ul className="blog-lista">
            {outros.map((o) => (
              <li key={o.slug}>
                <article className="card blog-card">
                  <h3>
                    <Link href={`/${o.slug}`}>{o.titulo}</Link>
                  </h3>
                  <p>{o.descricao}</p>
                </article>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
