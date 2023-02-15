import React from 'react';
import { Link } from 'react-router-dom';

const SongBar = ({ song }) => {
console.log(song)
  return(
    <Link to={`/songs/${song.id}`} className="flex group relative w-full h-20 md:h-16 cursor-pointer hover:bg-[#47474788] transition-colors ease-in duration-300 backdrop-blur-sm rounded-md">
      <div className="flex flex-1 justify-between overflow-hidden mr-2">
        <img src={song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')} alt={song?.title} className="h-full rounded-md"/>
        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-white sm:text-lg font-semibold truncate">{song?.attributes?.name.slice(0, 30)}</p>
          <p className="text-gray-400 sm:text-base text-xs truncate">{song?.attributes?.albumName.slice(0, 30)}</p>
        </div>
      </div>
    </Link>
)};

export default SongBar;