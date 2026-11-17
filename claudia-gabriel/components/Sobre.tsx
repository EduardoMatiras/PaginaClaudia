import Image from "next/image";
import fotoSobre from "@/public/claudia-sobre-1.webp";
import fotoSobre2 from "@/public/claudia-sobre-2.webp";
import { pendente, site } from "@/lib/site";

export default function Sobre() {
  return (
    <section id="sobre" className="container sobre">
      <div className="sobre-fotos">
        <div className="sobre-foto1">
          <Image
            src={fotoSobre}
            alt="Psicóloga Claudia Gabriel sorrindo, sentada em uma cadeira de madeira perto da janela"
            fill
            sizes="(max-width: 800px) 76vw, 365px"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <div className="sobre-foto2">
          <Image
            src={fotoSobre2}
            alt="Claudia Gabriel, psicóloga em Rondonópolis – MT, sorrindo em uma poltrona"
            fill
            sizes="(max-width: 800px) 42vw, 200px"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
        </div>
        <div className="sobre-tags">
          <div>Psicóloga clínica</div>
          <div>Especialista em luto e perdas</div>
          <div>Terapia Cognitivo-Comportamental</div>
        </div>
      </div>
      <div className="sobre-texto">
        <h2 className="title">
          Sobre <strong>mim</strong>
        </h2>
        <p className="sobre-destaque">Um lugar onde a sua perda pode ser dita.</p>
        <p className="resumo">
          Sou Claudia Gabriel, psicóloga clínica (CRP {site.crp}) formada pela Faculdade Anhanguera
          de Rondonópolis (MT), especialista em <strong>Perdas e Luto</strong> e em{" "}
          <strong>Terapia Cognitivo-Comportamental</strong> pelo ITCC-MS. Atendo adultos e
          adolescentes no meu consultório em Rondonópolis e online, para todo o Brasil.
        </p>
        <p>
          Sou apaixonada pelo meu trabalho. Meu objetivo é acolher a demanda de cada paciente,
          ajudando a entender suas emoções e comportamentos, trazendo bem-estar para a saúde mental,
          psicoeducação no processo de luto e caminhando junto de cada um no seu processo de dor.
        </p>
        <p>
          Fora do consultório, sou apaixonada pela minha família: casada há 22 anos, mãe de dois
          filhos e cristã. Minha prioridade é ter tempo de qualidade com a família e com Deus. Gosto
          de viajar, conhecer lugares novos, tirar fotos e observar o pôr do sol e a natureza.
        </p>
        <div className="sobre-meta">
          CRP {site.crp}
          {!pendente(site.anosExperiencia) && ` · ${site.anosExperiencia} anos de experiência`}
        </div>
      </div>
    </section>
  );
}
