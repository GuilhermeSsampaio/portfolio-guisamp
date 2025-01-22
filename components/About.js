import Image from "next/image";

export default function About({ building_icon, location_icon, calendar_icon }) {
  return (
    <div className="about container align-text-left">
      <div className="about-me">
        <h2 id="sobre" className="title-about">
          Sobre mim
        </h2>
        <p>
          Sou desenvolvedor web, crio websites, como landing pages, sites
          customizáveis e sou aberto a projetos inovadores.
        </p>
        <p>
          Por aqui pode ver um pouco do que eu sei fazer e entrar em contato
          comigo.
        </p>
      </div>
      <div className="about-me container">
        <h2 id="sobre" className="title-about">
          Experiência Profissional
        </h2>
        <div className="row d-flex align-itens-center">
          <div className="col">
            <p>Junior Web Developer</p>
          </div>
          <div className="col-auto">
            <span className=" badger rounded-pill">Estágio</span>
          </div>
        </div>
        <div className="row d-flex align-itens-center">
          <div className="col d-flex align-items-center">
            <Image src={building_icon} height={30} className="me-2" />
            <p className="mb-0">Embrapa Agropecúaria Oeste</p>
          </div>
          <div className="col d-flex align-items-center">
            <Image src={location_icon} height={25} className="me-2" />
            <p className="mb-0">Dourados-MS</p>
          </div>
          <div className="col-auto">
            <div className="col d-flex align-items-center">
              <Image src={calendar_icon} height={20} className="me-2" />
              <p className="mb-0">Maio 2023 - Maio 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <hr className="custom-hr"></hr>
      </div>
      {/* Education */}
      <div className="about-me container">
        <h2 id="sobre" className="title-about">
          Educação
        </h2>
        <div className="row d-flex align-items-center">
          <div className="col">
            <p className="mb-4">Bacharelado em Sistemas De Informação</p>
          </div>
          <div className="col-auto mb-4">
            <span className="badger rounded-pill">Universidade</span>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col d-flex align-items-center">
            <Image src={building_icon} height={30} className="me-2" />
            <p className="mb-0">
              UFGD - Universidade Federal da Grande Dourados
            </p>
          </div>
          <div className="col d-flex align-items-center">
            <Image src={location_icon} height={25} className="me-2" />
            <p className="mb-0">Dourados-MS</p>
          </div>
          <div className="col d-flex align-items-center">
            <Image src={calendar_icon} height={20} className="me-2" />
            <p className="mb-0">Maio 2023 - Dezembro 2026</p>
          </div>
        </div>
      </div>
      <div className="about-me container">
        <div className="mb-2">
          <hr></hr>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col">
            <p className="mb-4">Técnico em Informática para Internet</p>
          </div>
          <div className="col-auto mb-4">
            <span className="badger rounded-pill">Ensino Técnico</span>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col d-flex align-items-center">
            <Image src={building_icon} height={30} className="me-2" />
            <p className="mb-0">
              IFMS - Instituto Federal de Mato Grosso do Sul - Campus Dourados
            </p>
          </div>
          <div className="col d-flex align-items-center">
            <Image src={location_icon} height={25} className="me-2" />
            <p className="mb-0">Dourados-MS</p>
          </div>
          <div className="col d-flex align-items-center">
            <Image src={calendar_icon} height={20} className="me-2" />
            <p className="mb-0">Março 2020 - Dezembro 2022</p>
          </div>
        </div>
        <div className="mb-5">
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
