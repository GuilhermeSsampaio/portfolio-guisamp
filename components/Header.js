import Image from "next/image";

export default function Header({
  logoGui,
  icon_github,
  icon_insta,
  icon_linkedin,
}) {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 align-itens-center">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <Image src={logoGui} height={80} />
        {/* <span className="fs-4">Gui Samp</span> */}
      </a>

      <ul className="nav nav-pills pt-3 links-header">
        <li className="nav-item">
          <a href="#hero" className="text-link-header " aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#sobre" className="text-link-header">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a href="#tech-stack" className="text-link-header">
            Tecnologias
          </a>
        </li>
        <li className="nav-item">
          <a href="#projetos" className="text-link-header">
            Projetos
          </a>
        </li>
        <li className="nav-item">
          <a href="#contato" className="text-link-header">
            Contato
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <Image src={icon_github} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <Image src={icon_insta} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <Image src={icon_linkedin} />
          </a>
        </li>
      </ul>
    </header>
  );
}
