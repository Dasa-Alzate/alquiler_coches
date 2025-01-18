import React from 'react';

const Filterbar = () => {
  const filters = 
  [{name: 'Marca', link: 'marca', isActive: false}, 
    {name: 'Modelo', link: 'modelo', isActive: false},
    {name: 'Precio', link: 'precio', isActive: false},
    {name: 'Transmisión', link: 'transmisión', isActive: true},
    {name: 'Asientos', link: 'asientos', isActive: true},
    {name: 'Tipo', link: 'tipo', isActive: false},
  ];

  return (
    <nav className="font-lato text-xl p-4 flex space-x-2 md:space-x-4 lg:space-x-8 w-full justify-around items-center">

      <button className="flex justify-center size-8 bg-secondary-600 rounded-lg">
        <img className="w-4" src="sort.svg" alt="sort-filter" />
      </button>

        {filters.map((filter) => {
          return (
            <button key={filter.link} className={`flex justify-center items-center h-8 px-4 py-1 rounded-lg ${filter.isActive ? 
              'text-secondary-950 bg-secondary-300 hover:shadow-md hover:shadow-secondary-800/25' : 
              'text-secondary-300 border border-secondary-300 hover:text-secondary-950 hover:bg-secondary-300'
            } transition-all duration-200`} >
              {filter.name}
            </button>
          )
        })}
    </nav>
  );
};

export default Filterbar;
