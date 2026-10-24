import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dores from "@/components/Dores";
import Sobre from "@/components/Sobre";
import ComoAjudar from "@/components/ComoAjudar";
import ComoFunciona from "@/components/ComoFunciona";
import PrimeiraVez from "@/components/PrimeiraVez";
import Perguntas from "@/components/Perguntas";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { jsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Dores />
        <Sobre />
        <ComoAjudar />
        <ComoFunciona />
        <PrimeiraVez />
        <Perguntas />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
