import React from 'react';

const ConfigButton = ({image, alt, text, hint, isActive, onClick}) => {
  return (
    <div className={`flex items-center cursor-pointer`} title={hint} onClick={onClick}>
      <img src={image} alt={alt} className='size-8' />
      <div className={`rounded-lg transition-all duration-200 ${isActive ? "bg-primary-300 text-primary-950" : "bg-secondary-600 text-secondary-950"} w-44 py-1 ml-4 text-sm text-center`}>
        {text}
      </div>
    </div>
  );
};

export default ConfigButton;
