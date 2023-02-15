import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behaviour: "smooth" });
  });

  const topPlays = data?.slice(0, 5);
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

const TopChartCard = ({ song, i, handlePauseClick, handlePlayClick, isPlaying, activeSong }) => {
  return (
    <div className="group relative w-full h-20 md:h-16 flex bg-[#ffffff30] cursor-pointer hover:bg-[#474747] transition-colors ease-in duration-300 backdrop-blur-sm rounded-md">
      <div className="flex flex-1 justify-between overflow-hidden mr-2">
        <img src={song?.images?.coverart} alt={song?.title} className="h-full rounded-l-md"/>
        <div className="w-full flex flex-1 ml-3 items-center justify-start">
          <p className="text-white font-semibold truncate">{song?.title}</p>
        </div>
        <div className=
        {`absolute right-2 bottom-4 md:bottom-2 group-hover:flex group-hover:animate-slowfade ${activeSong?.title === song.title ? 'flex' : 'hidden'}`}>
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={() => handlePlayClick(song, i)}
          />
        </div>
      </div>
    </div>
  )
}

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col pt-5">
      <div className="w-full flex flex-col">
        <div className="flex w-full items-center justify-between flex-row">
          <h2 className="text-white text-2xl font-bold">Top Plays</h2>
          <Link to='/top-charts'>
            <p className="text-gray-400 hover:underline text-xs font-semibold">SHOW ALL</p>
          </Link>
        </div>

        <div className="mt-4 px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-5">
          {topPlays?.map((song, i) => (
            <TopChartCard 
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
          ))}
        </div>
      </div>

      <div >
        <div className="w-full flex flex-col mt-8">
          <div className="flex items-center justify-between flex-row">
            <h2 className="text-white text-2xl font-bold">Top Artists</h2>
            <Link to='/top-artists'>
              <p className="text-gray-400 hover:underline text-xs font-semibold">SHOW ALL</p>
            </Link>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topPlays?.map((song, i) => (
                <SwiperSlide
                  key={song?.key}
                  style={{ width:'25%', height:'auto'}}
                  className="shadow-lg rounded-full animate-slideright">
                  
                  <Link to={`/artists/${song?.artists[0].adamid}`}>
                    <img src={song?.images.background} alt="" className="rounded-full w-full object-cover"/>
                  </Link>

                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
};

export default TopPlay;
