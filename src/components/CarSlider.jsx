import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const CarSlider = ({ cars }) => {
  return (
    <div className="relative mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {cars.map((car, i) => {
        return (
          <Link to={`/detalles`} >
            <Card key={i} image={car.image} name={car.name} model={car.model} year={car.year} />
          </Link>
          
        )
      })}
    </div>
    
  );
};

export default CarSlider;
