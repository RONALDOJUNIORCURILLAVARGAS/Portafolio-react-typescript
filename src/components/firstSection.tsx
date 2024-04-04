import logoPicaras from "../images/clients/Logo-Picaras.png"
import logoPacasmayo from "../images/clients/Logo-Pacasmayo.png"
import logoMenorca from "../images/clients/Logo-Menorca.png"
import logoEtex from "../images/clients/Logo-Etex.png"
import logoCosta from "../images/clients/Logo-Costa.png"
export const TodoCOmpon = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Transformación Digital Potenciada
              {/* <span className="text-primary dark:text-white">
                reimagination.
              </span> */}
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Soy un desarrollador full stack apasionado por crear soluciones digitales
              innovadoras para clientes diversos. Desde startups hasta grandes
              empresas, mi enfoque versátil y colaborativo garantiza resultados
              sobresalientes. ¿Listo para llevar tu proyecto al siguiente nivel?
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Descargar CV
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Repositorio
                </span>
              </a>
            </div>
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
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer">
              
              <img
                src={logoPicaras}
                className="h-[80px] w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              /> 

            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0 cursor-pointer  items-center">
              
              <img
                src={logoPacasmayo}
                className=" w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0 cursor-pointer  items-center">
              
              <img
                src={logoMenorca}
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer flex items-center">
             
              <img
                src={logoEtex}
                className="md:h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0 cursor-pointer items-center">
             
               <img
                src={logoCosta}
                className="h-[60px] w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            {/* <div className="p-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer">
              <img
                src="./src/images/clients/google-cloud.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
