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
      className="card mb-2 mx-auto project-card"
      style={{
        width: "100%",
        maxWidth: 360,
        minHeight: 500,
        borderRadius: 20,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        background: "rgba(255,255,255,0.85)",
        border: "1px solid #eaeaea",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow =
          "0 16px 40px 0 rgba(31, 38, 135, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.2)";
      }}
    >
      <div style={{ width: "100%", height: 220, position: "relative" }}>
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h2 className="h2 fw-bold text-truncate" style={{ color: "#2d3748" }}>
          {title}
        </h2>
        <p className="card-text flex-grow-1" style={{ color: "#4a5568" }}>
          {description}
        </p>
        <p style={{ fontSize: 14, color: "#718096" }}>
          <span className="stack" style={{ fontWeight: 600, color: "#2b6cb0" }}>
            Tech stack:
          </span>{" "}
          {techStack}
        </p>
        <div className="links-card row mt-auto" style={{ gap: 8 }}>
          <div className="align-items-center col-6 d-flex">
            <Image
              src={chain_icon}
              alt="link"
              width={24}
              height={24}
              className="mx-2"
            />
            <a
              className="link-black"
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3182ce",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Vizualizar
            </a>
          </div>
          <div className="align-items-center col-auto d-flex">
            <Image
              src={github_card}
              alt="github"
              width={24}
              height={24}
              className="mx-2"
            />
            <a
              className="link-black"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2d3748",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
