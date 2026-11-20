import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <Link href="/" className="header-logo" aria-label="Claudia Gabriel – página inicial">
          <Image src={logo} alt="Claudia Gabriel" priority sizes="200px" />
        </Link>
        <nav aria-label="Principal">
          <Link href="/#sobre">Sobre mim</Link>
          <Link href="/#atendimento" className="nav-opcional">
            Atendimento
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
