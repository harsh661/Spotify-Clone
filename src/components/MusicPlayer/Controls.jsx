import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsPause, BsPlayFill, BsShuffle } from 'react-icons/bs';
import { MdPlayCircle, MdPauseCircle } from 'react-icons/md';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <>
      <MdPauseCircle size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer hidden md:flex" />
      <BsPause size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer md:hidden" />
      </>
    ) : (
      <>
      <MdPlayCircle size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer hidden md:flex" />
      <BsPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer md:hidden" />
      </>
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
