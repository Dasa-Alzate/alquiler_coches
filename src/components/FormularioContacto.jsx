import React, { useState } from "react";
import "./FormularioContacto.css";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="pagina-container">
      <div className="titulo-seccion">
        <h1 className="titulo-principal">
          Tienes un
          <br />
          viaje en mente?
        </h1>
        <h1 className="titulo-principal2">
          Podemos ayudarte
          <br />
          con eso.
        </h1>
        <img src="/images/arrow.svg" alt="arrow" />
      </div>

      <div className="formulario-seccion">
        <form onSubmit={handleSubmit} className="formulario-contacto">
          <div className="formulario-campos">
            <h1>Comunícate con nosotros</h1>

            <div className="campo-formulario">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="input-formulario"
              />
            </div>

            <div className="campo-formulario">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className="input-formulario"
              />
            </div>

            <div className="campo-formulario">
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="input-formulario"
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="motivo">Motivo</label>
              <textarea
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                placeholder="Quiero más información de coches 4x4"
                required
              />
            </div>

            <div className="campo-formulario">
              <button type="submit" className="boton-enviar">
                Enviar
              </button>
            </div>
          </div>
        </form>

        <div className="social-footer">
          <p className="social-text">Síguenos en:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="social-link">
              <img src="/images/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/" className="social-link">
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.youtube.com/" className="social-link">
              <img src="/images/youtube.svg" alt="youtube" />
            </a>
            <a href="https://www.twitter.com/" className="social-link">
              <img
                src="/images/twitter.svg"
                alt="twitter"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a href="https://www.tiktok.com/" className="social-link">
              <img src="/images/tiktok.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
