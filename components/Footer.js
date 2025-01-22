import Image from "next/image";

export default function Footer({
  logoGui,
  icon_github,
  icon_insta,
  icon_linkedin,
}) {
  return (
    <>
      <div className="container footer d-flex justify-content-between align-items-center">
        <div className="footer-logo">
          <Image src={logoGui} alt="Logo" height={50} />
        </div>
        <div className="footer-email d-flex align-items-center">
          <p className="mb-0 mx-2">guilhermessampaio20@gmail.com</p>
          <ul className="list-inline mb-0 ml-3">
            <li className="list-inline-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GuilhermeSsampaio"
                className="nav-link"
              >
                <Image src={icon_github} alt="GitHub" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="nav-link">
                <Image src={icon_insta} alt="Instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/guilhermessampaio/"
                className="nav-link"
              >
                <Image src={icon_linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <hr className="custom-hr" />
      </div>
      <div className="footer-links d-flex justify-content-center mt-3 pb-5">
        <ul className="nav nav-pills pt-3 links-header">
          <li className="nav-item">
            <a href="#hero" className="text-link-header" aria-current="page">
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
        </ul>
      </div>
    </>
  );
}
