import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dores from "@/components/Dores";
import Sobre from "@/components/Sobre";
import ComoAjudar from "@/components/ComoAjudar";
import ComoFunciona from "@/components/ComoFunciona";
import PrimeiraVez from "@/components/PrimeiraVez";
import AtendimentoLocal from "@/components/AtendimentoLocal";
import Perguntas from "@/components/Perguntas";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import BlogDestaque from "@/components/BlogDestaque";
import { jsonLd, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLd())}
      />
      <Header />
      <main>
        <Hero />
        <Dores />
        <Sobre />
        <ComoAjudar />
        <ComoFunciona />
        <AtendimentoLocal />
        <PrimeiraVez />
        <BlogDestaque />
        <Perguntas />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
