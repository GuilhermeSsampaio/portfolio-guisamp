import Image from "next/image";

export default function Footer({
  logoGui,
  icon_github,
  icon_insta,
  icon_linkedin,
}) {
  return (
    <>
      <div className="container footer d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <div className="footer-logo mb-3 mb-md-0">
          <Image src={logoGui} alt="Logo" height={106} />
        </div>
        <div className="footer-email-icons d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <p className="mb-2 mb-md-0 mx-md-3 text-center text-md-start">
            guilhermessampaio20@gmail.com
          </p>
          <ul className="list-inline mb-0 d-flex gap-3 justify-content-center">
            <li className="list-inline-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GuilhermeSsampaio"
                className="nav-link"
              >
                <i
                  className="bi bi-github"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="nav-link">
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/guilhermessampaio/"
                className="nav-link"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
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
