import Image from "next/image";

export default function ProjectCard({
  imgSrc,
  title,
  description,
  techStack,
  viewLink,
  codeLink,
  chain_icon,
  github_card,
}) {
  return (
    <div
      className="card mb-2 mx-auto"
      style={{ width: "100%", maxWidth: 360, minHeight: 500 }}
    >
      <img
        src={imgSrc}
        className="card-img-top img-fluid"
        alt="..."
        height={320}
      />
      <div className="card-body d-flex flex-column">
        <h2 className="h2 fw-bold text-truncate">{title}</h2>
        <p className="card-text flex-grow-1">{description}</p>
        <p>
          <span className="stack">Tech stack:</span> {techStack}
        </p>
        <div className="links-card row mt-auto">
          <div className="align-items-center col-6 d-flex">
            <Image src={chain_icon} className="mx-2" />
            <a
              className="link-black"
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vizualizar
            </a>
          </div>
          <div className="align-items-center col-auto d-flex">
            <Image src={github_card} className="mx-2" />
            <a
              className="link-black"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
