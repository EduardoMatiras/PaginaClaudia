import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatarData, postsOrdenados, tempoLeitura } from "@/lib/blog";
import { blogJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog sobre luto e perdas",
  description:
    "Artigos da psicóloga Claudia Gabriel, de Rondonópolis – MT, sobre luto, perdas, saúde emocional e como buscar ajuda. Conteúdo acolhedor e baseado em evidências.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Blog da psicóloga Claudia Gabriel" }],
  },
};

export default function Blog() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(blogJsonLd(postsOrdenados))} />
      <Header />
      <main className="container blog">
        <nav className="migalhas" aria-label="Você está em">
          <Link href="/">Início</Link> <span aria-hidden="true">/</span> <span>Blog</span>
        </nav>
        <header className="blog-intro">
          <h1 className="title">
            Blog sobre <strong>luto e perdas</strong>
          </h1>
          <p>
            Textos para quem está atravessando uma perda, ou acompanhando alguém que está. Escritos
            pela psicóloga Claudia Gabriel, especialista em perdas e luto em Rondonópolis – MT.
          </p>
        </header>
        <ul className="blog-lista">
          {postsOrdenados.map((post) => (
            <li key={post.slug}>
              <article className="card blog-card">
                <p className="blog-meta">
                  {post.categoria} · {tempoLeitura(post)} min de leitura
                </p>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                </h2>
                <p>{post.descricao}</p>
                <p className="blog-meta">
                  <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
