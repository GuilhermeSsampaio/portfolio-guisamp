import Image from "next/image";

export default function Hero({ foto_perfil }) {
  return (
    <div id="hero" className=" text-center hero">
      <div className="row justify-content-center">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-left mb-4 mb-md-0">
            <p className="mb-4 text-hero">
              Olá 👋,
              <br /> Me chamo <br />{" "}
              <span className="name-stylized">Guilherme Sampaio</span> <br></br>
              Crio websites <br></br>e projetos pra web em geral
            </p>
          </div>
          <div className="">
            <Image src={foto_perfil} height={260} />
          </div>
        </div>
      </div>
    </div>
  );
}
