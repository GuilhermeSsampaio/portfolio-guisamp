import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiStrapi,
  // SiVisualstudioCode,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

export default function TechStack() {
  return (
    <div id="tech-stack" className="tech-stack container text-center mt-5 pb-5">
      <h2 className="fs-1">Minha Tech Stack</h2>
      <p className="fs-3">Tecnologias que eu uso no meu dia a dia </p>
      {/* Carrossel circular para mobile */}
      <div className="techstack-circle-carousel d-md-none">
        <div className="circle">
          <div className="icon">
            <FaHtml5 size={40} color="#e34c26" />
          </div>
          <div className="icon">
            <FaCss3Alt size={40} color="#2965f1" />
          </div>
          <div className="icon">
            <FaJs size={40} color="#f7df1e" />
          </div>
          <div className="icon">
            <FaReact size={40} color="#61dafb" />
          </div>
          <div className="icon">
            <VscVscodeInsiders size={40} color="#0078d4" />
          </div>
          <div className="icon">
            <FaGithub size={40} color="#fff" />
          </div>
          <div className="icon">
            <SiNextdotjs size={40} color="#fff" />
          </div>
          <div className="icon">
            <SiStrapi size={40} color="#8e75ff" />
          </div>
          <div className="icon">
            <FaDocker size={40} color="#2496ed" />
          </div>
          <div className="icon">
            <FaPython size={40} color="#3776ab" />
          </div>
          <div className="icon">
            <SiMysql size={40} color="#00758f" />
          </div>
          <div className="icon">
            <SiGit size={40} color="#f05032" />
          </div>
        </div>
      </div>
      {/* Grid normal para desktop/tablet */}
      <div className="icons-tecnologies row d-none d-md-flex flex-wrap justify-content-center align-items-center mt-5 pb-5 techstack-icons-responsive">
        <div className="col-sm-6 col-md-2 p-2">
          <FaHtml5 size={60} color="#e34c26" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaCss3Alt size={60} color="#2965f1" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaJs size={60} color="#f7df1e" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaReact size={60} color="#61dafb" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <VscVscodeInsiders size={60} color="#0078d4" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaGithub size={60} color="#fff" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <SiNextdotjs size={60} color="#fff" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <SiStrapi size={60} color="#8e75ff" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaDocker size={60} color="#2496ed" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <FaPython size={60} color="#3776ab" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <SiMysql size={60} color="#00758f" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <SiGit size={60} color="#f05032" />
        </div>
      </div>
    </div>
  );
}
