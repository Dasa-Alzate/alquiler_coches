import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import FormularioPagos from "../components/FormularioPagos";

const Pago = () => {
  return (
    <MainLayout>
      <Navbar activeLink="Pago" />
      <FormularioPagos
        numCard="numeroTarjeta"
        fechExpiracion="fechExpiracion"
        cvv="cvv"
        titular="titular"
        email="email"
      />
    </MainLayout>
  );
};

export default Pago;
