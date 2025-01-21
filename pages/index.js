import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";

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

  return (
    <>
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
        </div>
      </div>
    </>
  );
}
