import React, { useState } from "react";
import TarjetaForm from '../components/TarjetaForm';
import { Link } from "react-router-dom";

const Pagos = () => {
  const [metodoPago, setMetodoPago] = useState("");
  const [formData, setFormData] = useState({
    numeroTarjeta: "",
    fechaExpiracion: "",
    cvv: "",
    titular: "",
    email: "",
  });

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-primary-900 w-screen h-[70vh] flex flex-row items-center">
      <div className="basis-1/3 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Estas a un <br />
          paso de <br />
          reservar el <br />
          coche de tus <br />
          sueños
        </h1>
        <img
          src="/images/arrow.svg"
          alt="arrow"
          className="w-64 rotate-90 invert"
        />
      </div>
      <div className="basis-1/2 p-6 mt-20 h-[70vh] bg-secondary-500 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary-900 text-center">
            Selecciona el método de pago
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                id="visa"
                value="visa"
                name="metodoPago"
                checked={metodoPago === "visa"}
                onChange={handleMetodoPagoChange}
                className="peer hidden"
              />
              <label
                htmlFor="visa"
                className="border flex justify-center items-center w-48 h-32 mb-8 rounded-xl peer-checked:border-secondary-900 border-2 peer-checked:border-solid border-zinc-500/50 border-dashed peer-checked:grayscale-0 grayscale cursor-pointer transition-all duration-200"
              >
                <img
                  src="/public/visa.svg"
                  alt="Visa"
                  className="w-28 h-28 object-contain"
                />
              </label>

              {metodoPago === "visa" && <TarjetaForm handleInputChange={handleInputChange} formData={formData} />}
            </div>

            <div className="flex flex-col items-center">
              <input
                type="radio"
                id="mastercard"
                value="mastercard"
                name="metodoPago"
                checked={metodoPago === "mastercard"}
                onChange={handleMetodoPagoChange}
                className="peer hidden"
              />
              <label
                htmlFor="mastercard"
                className="border flex justify-center items-center w-48 h-32 mb-8 rounded-xl peer-checked:border-secondary-900 border-2 peer-checked:border-solid border-zinc-500/50 border-dashed peer-checked:grayscale-0 grayscale cursor-pointer transition-all duration-200"
              >
                <img
                  src="/public/mastercard.svg"
                  alt="Mastercard"
                  className="w-28 h-28 object-contain"
                />
              </label>

              {metodoPago === "mastercard" && <TarjetaForm handleInputChange={handleInputChange} formData={formData} />}
            </div>

            <div className="flex flex-col items-center">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                name="metodoPago"
                checked={metodoPago === "paypal"}
                onChange={handleMetodoPagoChange}
                className="peer hidden"
              />
              <label
                htmlFor="paypal"
                className="border flex justify-center items-center w-48 h-32 mb-8 rounded-xl peer-checked:border-secondary-900 border-2 peer-checked:border-solid border-zinc-500/50 border-dashed peer-checked:grayscale-0 grayscale cursor-pointer transition-all duration-200"
              >
                <img
                  src="/public/paypal.svg"
                  alt="Paypal"
                  className="w-28 h-28 object-contain"
                />
              </label>

              {metodoPago === "paypal" && (
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email de PayPal"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-secondary-950 border-none text-white placeholder-gray-50 shadow-inner-xl shadow-stone-900/50"
                    required
                  />
                </div>
              )}
            </div>
            
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="w-[20vh] bg-primary-400 text-white mx-20 py-3 px-4 rounded hover:bg-primary-900 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              console.log("Método de pago seleccionado:", metodoPago);
              console.log("Datos del formulario:", formData);
            }}
          >
            Pagar
          </button>
          <Link
            to="/"
            className="w-[20vh] bg-primary-400 text-white mx-20 py-3 px-4 rounded hover:bg-primary-900 transition-colors duration-200 text-center"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
