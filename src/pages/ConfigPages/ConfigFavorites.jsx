import React, { useState, useEffect } from "react";
import $ from "jquery";
import Card from "../../components/Card";
import Filterbar from "../../components/Filterbar";
import { Link } from "react-router-dom";

const ConfigFavorites = ({ active }) => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    $.ajax({
      url: `http://localhost:3000/cars/paginated/${page}`,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        setCars([...cars, ...data]);
      },
      error: function () {
        console.error('Error al cargar las reseñas.');
      },
    });
  }, [page]);

  return (
    <nav
      className={`font-lato text-2xl text-white/75 p-4 flex flex-col basis-20% justify-center ${
        active ? "" : "hidden"
      }`}
    >
      <h1 className="text-4xl mb-2">Favorites</h1>
      <hr />

      <Filterbar />

      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cars.map((car) => {
          return (
            <Link to={`/detalles`}>
              <Card
                image={car.image}
                name={car.name}
                model={car.model}
                year={car.year}
                favorited={true}
              />
            </Link>
          );
        })}
      </div>
      <div className="h-6 w-full -mx-4 flex justify-center items-end text-zinc-200 bg-gradient-to-t from-zinc-600/75 via-70% via-zinc-700/10 transition-all duration-300 hover:h-10 hover:-mt-4 hover:font-bold hover:from-zinc-400/50 cursor-pointer" onClick={() => setPage(page+1)}>
        <span className="h-fit">Ver mas</span>
      </div>
    </nav>
  );
};

export default ConfigFavorites;
