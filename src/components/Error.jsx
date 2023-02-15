import React from 'react';

const Error = (internal) => (
  <div className={`w-full h-screen ${internal==true ? 'bg-transparent' : 'bg-black'} flex items-center justify-center`}>
    <h2 className='font-bold text-white text-3xl flex-wrap flex text-center'>Oops! Something went wrong</h2>
  </div>
);

export default Error;
