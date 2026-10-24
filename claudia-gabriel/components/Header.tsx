import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <a href="#topo" className="header-logo">
          <Image src={logo} alt="Claudia Gabriel" priority />
        </a>
        <nav aria-label="Principal">
          <a href="#sobre">Sobre mim</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
