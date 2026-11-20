import Link from "next/link";
import { postsOrdenados, tempoLeitura } from "@/lib/blog";

export default function BlogDestaque() {
  const recentes = postsOrdenados.slice(0, 3);
  return (
    <section id="artigos" className="container blog-destaque">
      <div className="perguntas-intro">
        <h2 className="title">
          Artigos sobre <strong>luto</strong>
        </h2>
        <p>Leituras para quem está atravessando uma perda ou acompanhando alguém.</p>
      </div>
      <ul className="blog-lista">
        {recentes.map((post) => (
          <li key={post.slug}>
            <article className="card blog-card">
              <p className="blog-meta">
                {post.categoria} · {tempoLeitura(post)} min de leitura
              </p>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
              </h3>
              <p>{post.descricao}</p>
            </article>
          </li>
        ))}
      </ul>
      <p className="blog-destaque-todos">
        <Link href="/blog">Ver todos os artigos</Link>
      </p>
    </section>
  );
}
