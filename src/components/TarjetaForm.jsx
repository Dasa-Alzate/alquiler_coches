import React from 'react';

const TarjetaForm = ({ handleInputChange, formData }) => {
  return (
    <div className="space-y-2 w-full">
      <input
        type="text"
        name="numeroTarjeta"
        placeholder="Número de tarjeta"
        value={formData.numeroTarjeta}
        onChange={handleInputChange}
        maxLength="16"
        pattern="\d*"
        className="w-full p-2 rounded-xl bg-secondary-950 border-none text-white placeholder-gray-50 shadow-inner-xl shadow-stone-900/50"
      />
      <input
        type="text"
        name="fechaExpiracion"
        placeholder="MM/AA"
        value={formData.fechaExpiracion}
        onChange={handleInputChange}
        maxLength="5"
        className="w-full p-2 rounded-xl bg-secondary-950 border-none text-white placeholder-gray-50 shadow-inner-xl shadow-stone-900/50"
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleInputChange}
        maxLength="4"
        pattern="\d*"
        className="w-full p-2 rounded-xl bg-secondary-950 border-none text-white placeholder-gray-50 shadow-inner-xl shadow-stone-900/50"
      />
    </div>
  );
};

export default TarjetaForm;
