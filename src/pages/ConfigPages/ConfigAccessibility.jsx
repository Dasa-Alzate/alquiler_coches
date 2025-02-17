import React from "react";
import { Link } from "react-router-dom";

const ConfigAccessibility = ({ active }) => {
  return (
    <nav
      className={`font-lato text-2xl text-white/75 p-4 basis-1/5 justify-center h-full ${
        active ? "" : "hidden"
      }`}
    >
      <h1 className="text-4xl mt-10">Accessibility</h1>
      <div className="flex flex-col gap-6">
        <h3 className="text-xl mt-10 mb-5">Visualización</h3>
        <hr />
        <div className="flex flex-col gap-4">
          <input
            type="button"
            value="Tamaño de texto"
            className="bg-neutral-900 rounded-lg py-2 px-6 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Contraste de color"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Modo Oscuro"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-4">
        <h3 className="text-xl mt-10 mb-5">Acceso</h3>
        <hr />
        <div className="flex flex-col gap-4">
          <input
            type="button"
            value="Lectura en voz alta"
            className="bg-neutral-900 rounded-lg py-2 px-6 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Navegación por teclado"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Lectores de pantalla"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Idiomas"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
          <input
            type="button"
            value="Entrada de texto"
            className="bg-neutral-900 rounded-lg py-2 px-6 mt-5 text-lg lg:w-fit shadow-xl shadow-black/75 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default ConfigAccessibility;
