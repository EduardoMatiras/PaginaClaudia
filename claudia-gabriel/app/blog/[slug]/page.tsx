import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fotoAutora from "@/public/claudia-sobre-1.webp";
import { WhatsappLogo } from "@/components/icons";
import { buscarPost, formatarData, posts, tempoLeitura } from "@/lib/blog";
import { jsonLdScript, postJsonLd } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { servicos } from "@/lib/servicos";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = buscarPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: { absolute: `${post.tituloSeo ?? post.titulo} | Claudia Gabriel` },
    description: post.descricao,
    keywords: post.palavrasChave,
    alternates: { canonical: url },
    authors: [{ name: site.nome, url: site.url }],
    openGraph: {
      type: "article",
      url,
      title: post.titulo,
      description: post.descricao,
      publishedTime: post.publicadoEm,
      modifiedTime: post.atualizadoEm ?? post.publicadoEm,
      authors: [site.nome],
      section: post.categoria,
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: post.titulo }],
    },
  };
}

export default async function Artigo({ params }: Props) {
  const post = buscarPost((await params).slug);
  if (!post) notFound();

  const outros = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(postJsonLd(post))} />
      <Header />
      <main className="container artigo">
        <nav className="migalhas" aria-label="Você está em">
          <Link href="/">Início</Link> <span aria-hidden="true">/</span>{" "}
          <Link href="/blog">Blog</Link> <span aria-hidden="true">/</span>{" "}
          <span>{post.categoria}</span>
        </nav>

        <article>
          <header className="artigo-cabecalho">
            <p className="blog-meta">
              {post.categoria} · {tempoLeitura(post)} min de leitura
            </p>
            <h1 className="title">{post.titulo}</h1>
            <p className="blog-meta">
              Por <Link href="/#sobre">Claudia Gabriel</Link>, psicóloga · CRP {site.crp} ·{" "}
              <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time>
              {post.atualizadoEm && (
                <>
                  {" "}
                  · atualizado em{" "}
                  <time dateTime={post.atualizadoEm}>{formatarData(post.atualizadoEm)}</time>
                </>
              )}
            </p>
          </header>

          <p className="artigo-resumo">
            <strong>Em resumo:</strong> {post.resumo}
          </p>

          <div className="artigo-corpo">
            {post.secoes.map((secao) => (
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

            {post.faq && (
              <section>
                <h2>Perguntas frequentes</h2>
                {post.faq.map((f) => (
                  <div key={f.pergunta} className="artigo-faq">
                    <h3>{f.pergunta}</h3>
                    <p>{f.resposta}</p>
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className="card artigo-autora" aria-label="Sobre a autora">
            <div className="artigo-autora-foto">
              <Image
                src={fotoAutora}
                alt="Psicóloga Claudia Gabriel"
                fill
                sizes="96px"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
            <div>
              <p className="artigo-autora-nome">Claudia Gabriel · Psicóloga · CRP {site.crp}</p>
              <p>
                Psicóloga clínica em Rondonópolis – MT, especialista em Perdas e Luto e em Terapia
                Cognitivo-Comportamental. Atende adultos e adolescentes, presencialmente e online.
              </p>
              <a
                href={whatsappLink(`Olá Claudia, li o artigo "${post.titulo}" e quero agendar.`)}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener"
              >
                Agendar uma conversa
                <WhatsappLogo />
              </a>
            </div>
          </aside>

          <nav className="local-servicos artigo-servicos" aria-label="Atendimentos">
            {servicos.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>
                {s.titulo}
              </Link>
            ))}
          </nav>

          <p className="artigo-aviso">
            Este conteúdo é informativo e não substitui uma avaliação psicológica. Em situação de
            crise, ligue 188 (CVV) ou 192 (SAMU).
          </p>
        </article>

        {outros.length > 0 && (
          <nav className="artigo-outros" aria-label="Outros artigos">
            <h2 className="title">
              Leia <strong>também</strong>
            </h2>
            <ul className="blog-lista">
              {outros.map((p) => (
                <li key={p.slug}>
                  <article className="card blog-card">
                    <p className="blog-meta">{p.categoria}</p>
                    <h3>
                      <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
                    </h3>
                  </article>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </main>
      <Footer />
    </div>
  );
}
