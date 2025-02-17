import React from 'react';

const SearchBar = ({type}) => {
  return (
    <form className={"relative hidden md:flex max-w-96 rounded-full bg-primary-900 h-12 shadow-inner-xl shadow-black/50 border border-black/50 " + (type=="navbar" ? "w-96" : "mx-2")} action="">
      <input type="text" placeholder='Búsqueda' className='ml-12 w-fit bg-transparent focus:outline-none focus:border-none placeholder:text-white/25'/>
      <div className='absolute left-0 h-full flex flex-col justify-center'>
        <img src="/search-icon.svg" alt="search-icon" className='ml-4 size-6'/>
      </div>
    </form>
  );
};

export default SearchBar;
