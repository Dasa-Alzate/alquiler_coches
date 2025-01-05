import React, { useState } from "react";
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

  const TarjetaForm = () => (
    <div className="space-y-2 w-full">
      <input
        type="text"
        name="numeroTarjeta"
        placeholder="Número de tarjeta"
        value={formData.numeroTarjeta}
        onChange={handleInputChange}
        maxLength="16"
        pattern="\d*"
        className="w-full p-2 rounded-xl bg-[#8D643B] border-none text-white placeholder-gray-50 shadow-inner-xl"
      />
      <input
        type="text"
        name="fechaExpiracion"
        placeholder="MM/AA"
        value={formData.fechaExpiracion}
        onChange={handleInputChange}
        maxLength="5"
        className="w-full p-2 rounded-xl bg-[#8D643B] border-none text-white placeholder-gray-50 shadow-inner-xl"
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleInputChange}
        maxLength="4"
        pattern="\d*"
        className="w-full p-2 rounded-xl bg-[#8D643B] border-none text-white placeholder-gray-50 shadow-inner-xl"
      />
    </div>
  );

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
          className="w-[250px] rotate-90 invert"
        />
      </div>
      <div className="basis-1/2 p-6 mt-20 h-[70vh] bg-secondary-500 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary-900 text-center">
            Selecciona el método de pago
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/public/visa.svg"
                alt="Visa"
                className="w-16 h-16 object-contain"
              />
              <div className="flex items-center">
                <input
                  type="radio"
                  id="visa"
                  value="visa"
                  name="metodoPago"
                  checked={metodoPago === "visa"}
                  onChange={handleMetodoPagoChange}
                  className="mr-2 accent-primary-900"
                />
                <label htmlFor="visa" className="text-primary-900">
                  Visa
                </label>
              </div>
              {metodoPago === "visa" && <TarjetaForm />}
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img
                src="/public/mastercard.svg"
                alt="Mastercard"
                className="w-16 h-16 object-contain"
              />
              <div className="flex items-center">
                <input
                  type="radio"
                  id="mastercard"
                  value="mastercard"
                  name="metodoPago"
                  checked={metodoPago === "mastercard"}
                  onChange={handleMetodoPagoChange}
                  className="mr-2 accent-primary-900"
                />
                <label htmlFor="mastercard" className="text-primary-900">
                  Mastercard
                </label>
              </div>
              {metodoPago === "mastercard" && <TarjetaForm />}
            </div>

            {/* PayPal Column */}
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/public/paypal.svg"
                alt="PayPal"
                className="w-16 h-16 object-contain"
              />
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  name="metodoPago"
                  checked={metodoPago === "paypal"}
                  onChange={handleMetodoPagoChange}
                  className="mr-2 accent-primary-900"
                />
                <label htmlFor="paypal" className="text-primary-900">
                  PayPal
                </label>
              </div>
              {metodoPago === "paypal" && (
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email de PayPal"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-[#8D643B] border-none text-white placeholder-gray-50 shadow-inner-xl"
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
            className="w-[20vh] bg-[#4B4B82] text-white mx-20 py-3 px-4 rounded hover:bg-primary-900 transition-colors duration-200"
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
            className="w-[20vh] bg-[#4B4B82] text-white mx-20 py-3 px-4 rounded hover:bg-primary-900 transition-colors duration-200 text-center"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
