import Image from "next/image";
import { useState } from "react";

export default function Header({ logoGui }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 mb-4 header"
      style={{ position: "relative" }}
    >
      <div className="text-center text-md-start mb-2 mb-md-0">
        <a
          href="/"
          className="d-flex justify-content-center justify-content-md-start link-body-emphasis text-decoration-none "
        >
          <Image src={logoGui} height={200} alt="Logo" />
        </a>
      </div>
      {/* Botão sanduíche para mobile */}
      <button
        className="d-md-none btn btn-outline-light"
        style={{ position: "absolute", top: 20, right: 20, zIndex: 1000 }}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <span style={{ fontSize: "2rem" }}>&#9776;</span>
      </button>
      <ul
        className={`nav nav-pills pt-3 pt-md-0 links-header flex-column flex-md-row ${
          menuOpen ? "d-flex" : "d-none d-md-flex"
        }`}
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          background: menuOpen ? "#191919" : "none",
          position: menuOpen ? "absolute" : "static",
          top: menuOpen ? 70 : "auto",
          right: menuOpen ? 0 : "auto",
          width: menuOpen ? "100vw" : "auto",
          padding: menuOpen ? "2rem 0" : "",
          zIndex: menuOpen ? 999 : "auto",
        }}
      >
        <li className="nav-item">
          <a
            href="#hero"
            className="text-link-header d-flex align-items-center header"
            aria-current="page"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#sobre"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#tech-stack"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            Tecnologias
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projetos"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contato"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GuilhermeSsampaio"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-github text-white me-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-instagram text-white me-1"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/guilhermessampaio/"
            className="text-link-header d-flex align-items-center"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-linkedin text-white me-1"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}
