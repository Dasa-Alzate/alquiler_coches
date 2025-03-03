import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const ConfigWallet = ({ active }) => {
  const cars = [];

  const transactionExample = {
    id: 1,
    image: "/public/images/cars/car1.webp",
    name: "Toyota",
    model: "Corolla",
    year: "2024",
  };

  return (
    <nav
      className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${
        active ? "" : "hidden"
      }`}
    >
      <h1 className="text-4xl mt-10">Wallet</h1>
      <h3 className="text-xl mt-10 mb-10">Métodos de pago</h3>
      <hr />
      <h4 className="text-base">Seleccione un método de pago</h4>
      <div className="flex justify-evenly mx-auto mt-5 lg:ml-20 flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="flex mb-5">
            <img
              src="/credit-card.svg"
              alt="credit-card"
              className="size-10 mt-5"
            />
            <input
              type="button"
              value="Credit/Debit Card"
              className="py-1 text-lg px-6 mt-5 ml-5"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Card Holder Name"
              className="lg:w-[25vh] h-[5vh] text-center bg-neutral-900 rounded-3xl text-lg placeholder:text-gray-400/75 text-gray-100 focus:outline-none shadow-inner-3xl shadow-black/75"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="lg:w-[25vh] h-[5vh] mt-5 text-center bg-neutral-900 rounded-3xl text-lg placeholder:text-gray-400/75 text-gray-100 focus:outline-none shadow-inner-3xl shadow-black/75"
            />
            <div className="flex gap-2 mt-5 flex-col lg:flex-row">
              <input
                type="month"
                placeholder="Exp. date"
                min="2024-01"
                className="lg:w-[15vh] h-[6vh] lg:mr-5 text-center bg-neutral-900 rounded-3xl text-lg placeholder:text-gray-400/75 text-gray-100 focus:outline-none shadow-inner-3xl shadow-black/75 [&::-webkit-calendar-picker-indicator]:invert"
              />
              <input
                type="text"
                placeholder="CVV Code"
                className="lg:w-[15vh] h-[6vh] lg:ml-5 text-center bg-neutral-900 rounded-3xl text-lg placeholder:text-gray-400/75 text-gray-100 focus:outline-none shadow-inner-3xl shadow-black/75"
              />
            </div>
            <input
              type="button"
              value="Editar"
              className="lg:w-[12vh] h-[5vh] bg-primary-700 hover:bg-primary-600 rounded-lg py-1 text-lg px-6 mt-5 shadow-lg shadow-zinc-950/75 cursor-pointer transition-all duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <img src="/paypal.svg" alt="paypal" className="size-10 mt-5" />
              <input
                type="button"
                value="Paypal"
                className="py-1 text-lg px-6 ml-5"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="lg:w-[25vh] h-[5vh] bg-neutral-900 rounded-3xl text-lg px-6 shadow-inner-3xl shadow-black/75"
            />
          </div>
        </div>
        
      </div>
      <h3 className="text-xl mt-20 mb-10">Historial de transacciones</h3>
      <hr />
      <h4 className="text-base">Pagos</h4>
      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Link to={`/detalles`} key={transactionExample.id}>
          <Card
            image={transactionExample.image}
            name={transactionExample.name}
            model={transactionExample.model}
            year={transactionExample.year}
            favorited={true}
          />
        </Link>
        <div className="flex flex-col gap-4">
          <input
            type="date"
            readOnly
            value="2024-03-15"
            className="bg-neutral-900 rounded-lg py-2 px-4 text-lg shadow-lg shadow-zinc-950/75 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          />
          <input
            type="text"
            readOnly
            value="1000€"
            className="bg-neutral-900 rounded-lg py-2 px-4 text-lg shadow-lg shadow-zinc-950/75"
          />
        </div>
      </div>
    </nav>
  );
};

export default ConfigWallet;
