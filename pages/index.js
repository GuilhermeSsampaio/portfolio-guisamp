import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard"; // Importar o novo componente

export default function Home() {
  const logoGui = require("../public/logo-gui.png");
  const icon_github = require("../public/github-icon-header.png");
  const icon_insta = require("../public/insta-icon.png");
  const icon_linkedin = require("../public/linkedin-icon.svg");
  const foto_perfil = require("../public/eu.png");
  const html_icon = require("../public/html-icon.svg");
  const css_icon = require("../public/css-icon.svg");
  const js_icon = require("../public/js-icon.svg");
  const react_icon = require("../public/react-icon.svg");
  const vs_code_icon = require("../public/vs-code-icon.svg");
  const github_icon = require("../public/github-icon.svg");
  const next_icon = require("../public/next-icon.png");
  const strapi_icon = require("../public/strapi-icon.png");
  const docker_icon = require("../public/docker-icon.png");
  const python_icon = require("../public/python-icon.png");
  const mysql_icon = require("../public/mysql-icon.png");
  const git_icon = require("../public/git-icon.svg");
  const building_icon = require("../public/building-icon.svg");
  const location_icon = require("../public/location-icon.svg");
  const calendar_icon = require("../public/calendar-icon.svg");
  const chain_icon = require("../public/link-chain.png");
  const github_card = require("../public/github-card.png");

  const projects = [
    {
      imgSrc: "/logo-tecnofam.png",
      title: "Tecnofam App",
      description:
        "Cartilha da agricultura familiar desenvolvida em conjunto com a Embrapa, que consome dados de uma API feita com Strapi JS. Desenvolvido em colaboração com Pedro Mota.",
      techStack: "HTML, CSS, Javascript, Nextjs, StrapiJs, Docker",
      viewLink: "https://tecnofamapp.cpao.embrapa.br/home",
      codeLink: "#",
    },
    {
      imgSrc: "/logo-tecnofam.png",
      title:
        "BOAS PRÁTICAS PARA INTEGRAÇÃO HARMÔNICA ENTRE APICULTURA E SOJICULTURA",
      description:
        "Cartilha com conteúdo sobre boas práticas desenvolvida em conjunto com a Embrapa, que consome dados de uma API feita com Strapi JS. Desenvolvido em colaboração com Pedro Mota.",
      techStack: "HTML, CSS, Javascript, Nextjs, StrapiJs, Docker",
      viewLink: "https://bpapisoja.cpao.embrapa.br/",
      codeLink: "#",
    },
    {
      imgSrc: "/logo-tecnofam.png",
      title:
        "Manual de Identificação de Insetos e outros Invertebrados da Cultura da Soja",
      description:
        "Cartilha da identificação de pragas na soja desenvolvida em conjunto com a Embrapa, que consome dados de uma API feita com Strapi JS. Desenvolvido em colaboração com Pedro Mota.",
      techStack: "HTML, CSS, Javascript, Nextjs, StrapiJs, Docker",
      viewLink: "https://tecnofamapp.cpao.embrapa.br/home",
      codeLink: "#",
    },
  ];

  return (
    <>
      <head>
        <title>Guilherme Sampaio</title>
      </head>
      <div className="background container-fluid">
        <div className="container align-itens-center">
          <Header
            logoGui={logoGui}
            icon_github={icon_github}
            icon_insta={icon_insta}
            icon_linkedin={icon_linkedin}
          />
          <Hero foto_perfil={foto_perfil} />
          <About
            building_icon={building_icon}
            location_icon={location_icon}
            calendar_icon={calendar_icon}
          />
          <TechStack
            html_icon={html_icon}
            css_icon={css_icon}
            js_icon={js_icon}
            react_icon={react_icon}
            vs_code_icon={vs_code_icon}
            github_icon={github_icon}
            next_icon={next_icon}
            strapi_icon={strapi_icon}
            docker_icon={docker_icon}
            python_icon={python_icon}
            mysql_icon={mysql_icon}
            git_icon={git_icon}
          />

          <div id="projetos" className="container">
            <div>
              <h2 className="title-about">Projetos</h2>
              <p className="about">Coisas que eu fiz por aí</p>
            </div>
            <div className="cards row pb-5">
              {projects.map((project, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                  <ProjectCard
                    key={index}
                    imgSrc={project.imgSrc}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    viewLink={project.viewLink}
                    codeLink={project.codeLink}
                    chain_icon={chain_icon}
                    github_card={github_card}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container text-center contato-div">
          <h2 className="contato">Entre em contato</h2>
          <a className="name-stylized fs-1">Linkedin</a>
          <br></br>
          <a className="name-stylized fs-1">Gmail</a>
        </div>
      </div>
    </>
  );
}
