import { useState } from "react";

export const ProjectsSection = () => {
  const [typeProject, settypeProject] = useState("clientes");

  return (
    <div className="relative pt-36 ml-auto" id="projects">
      <div className="lg:w-2/3 text-center mx-auto">
        <div className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
          Proyectos
        </div>
        <div className="text-gray-300 my-4">
          Si puedes <b className="text-primary">imaginarlo</b> puedes{" "}
          <b className="text-primary">programarlo</b>
        </div>
        <div className="grid grid-cols-2 mb-[20px]">
          <button
            className={`p-4 border-2 border-primary text-[16px] transition-all duration-300 font-semibold rounded-tl-2xl rounded-bl-2xl ${
              typeProject === "clientes"
                ? "bg-primary text-white"
                : "text-gray-300"
            }`}
            onClick={() => settypeProject("clientes")}
          >
            Clientes
          </button>
          <button
            className={`p-4 border-2 border-primary  text-[16px] transition-all duration-300 font-semibold rounded-tr-2xl rounded-br-2xl  ${
              typeProject === "personales"
                ? "bg-primary text-white"
                : "text-gray-300"
            }`}
            onClick={() => settypeProject("personales")}
          >
            Personales
          </button>
        </div>
        <div className="w-full grid gap-[20px] grid-cols-1 bg-primary ">
          {[1, 2, 3, 4, 5].map(() => (
            <div className="w-full min-h-[200px] bg-black text-white">hgf</div>
          ))}
        </div>
        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
          Transformación Digital Potenciada
          {/* <span className="text-primary dark:text-white">
                reimagination.
              </span> */}
        </h1>
        <p className="mt-8 text-gray-700 dark:text-gray-300">
          Soy un desarrollador full stack apasionado por crear soluciones
          digitales innovadoras para clientes diversos. Desde startups hasta
          grandes empresas, mi enfoque versátil y colaborativo garantiza
          resultados sobresalientes. ¿Listo para llevar tu proyecto al siguiente
          nivel?
        </p>

        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The lowest price
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The fastest on the market
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The most loved
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
