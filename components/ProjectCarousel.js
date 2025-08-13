import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Exemplo de projetos, substitua pelos seus dados reais
const projects = [
  {
    imgSrc: "/logo-tecnofam.png",
    title: "TecnofamApp",
    description:
      "Cartilha da agricultura familiar desenvolvida em conjunto com a Embrapa, que consome dados de uma API feita com Strapi JS. Desenvolvido em colaboração com Pedro Mota.",
    techStack: "React, Next.js. Strapi",
    viewLink: "https://tecnofamapp.cpao.embrapa.br/home",
    codeLink: "#",
    chain_icon: "/link-chain.png",
    github_card: "/github-icon.svg",
  },
  {
    imgSrc: "/logo-tecnofam.png",
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    techStack: "Node.js, Express",
    viewLink: "https://exemplo.com",
    codeLink: "https://github.com/exemplo",
    chain_icon: "/link-chain.png",
    github_card: "/github-icon.svg",
  },
  // Adicione mais projetos conforme necessário
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};

export default function ProjectCarousel() {
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "2rem 0" }}>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
