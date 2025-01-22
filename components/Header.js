import Image from "next/image";

export default function Header({
  logoGui,
  icon_github,
  icon_insta,
  icon_linkedin,
}) {
  return (
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 mb-4 header">
      <div className="text-center text-md-start mb-2 mb-md-0">
        <a
          href="/"
          className="d-flex justify-content-center justify-content-md-start link-body-emphasis text-decoration-none"
        >
          <Image src={logoGui} height={80} />
        </a>
      </div>

      <ul className="nav nav-pills pt-3 pt-md-0 links-header flex-column flex-md-row">
        <li className="nav-item">
          <a
            href="#hero"
            className="text-link-header d-flex align-items-center"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#sobre"
            className="text-link-header d-flex align-items-center"
          >
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#tech-stack"
            className="text-link-header d-flex align-items-center"
          >
            Tecnologias
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projetos"
            className="text-link-header d-flex align-items-center"
          >
            Projetos
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contato"
            className="text-link-header d-flex align-items-center"
          >
            Contato
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GuilhermeSsampaio"
            className="text-link-header d-flex align-items-center"
          >
            <Image src={icon_github} className="me-1" />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="text-link-header d-flex align-items-center"
          >
            <Image src={icon_insta} className="me-1" />
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/guilhermessampaio/"
            className="text-link-header d-flex align-items-center"
          >
            <Image src={icon_linkedin} className="me-1" />
          </a>
        </li>
      </ul>
    </header>
  );
}
