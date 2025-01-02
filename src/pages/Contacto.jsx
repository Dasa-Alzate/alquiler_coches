import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import FormularioContacto from "../components/FormularioContacto";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío
  };

  return (
    <MainLayout>
      <Navbar activeLink="Contacto" />
      <section>
        <div>
          <div>
            <div>
              <FormularioContacto
                name="nombre"
                email="email"
                phone="telefono"
                motivo="motivo"
                enviar={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contacto;
