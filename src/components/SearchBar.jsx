import React from 'react';

const SearchBar = () => {
  return (
    <form className="relative flex max-w-96 rounded-full bg-primary-900 w-96 h-12 shadow-inner-xl shadow-black/50 border border-black/50" action="">
      <input type="text" placeholder='Búsqueda' className='ml-12 bg-transparent focus:outline-none focus:border-none placeholder:text-white/25'/>
      <div className='absolute left-0 h-full flex flex-col justify-center'>
        <img src="search-icon.svg" alt="search-icon" className='ml-4 size-6'/>
      </div>
    </form>
  );
};

export default SearchBar;
