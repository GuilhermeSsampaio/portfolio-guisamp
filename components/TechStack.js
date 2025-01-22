import Image from "next/image";

export default function TechStack({
  html_icon,
  css_icon,
  js_icon,
  react_icon,
  vs_code_icon,
  github_icon,
  next_icon,
  strapi_icon,
  docker_icon,
  python_icon,
  mysql_icon,
  git_icon,
}) {
  return (
    <div id="tech-stack" className="tech-stack container text-center mt-5 pb-5">
      <h2 className="fs-1">Minha Tech Stack</h2>
      <p className="fs-3">Tecnologias que eu uso no meu dia a dia </p>
      <div className="icons-tecnologies row d-flex flex-wrap justify-content-center align-items-center mt-5 pb-5">
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={html_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={css_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={js_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={react_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={vs_code_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={github_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={next_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={strapi_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={docker_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={python_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={mysql_icon} height={60} className="img-fluid" />
        </div>
        <div className="col-sm-6 col-md-2 p-2">
          <Image src={git_icon} height={60} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
