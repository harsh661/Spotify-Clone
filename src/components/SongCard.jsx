import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice'

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {

  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div className={`flex-col shadow-lg bg-[#181818] w-32 sm:w-48 sm:p-4 p-2 animate-slideup rounded-lg hover:bg-[#2a2a2a] transition-colors ease-in duration-300 group ${song.images ? 'flex': 'hidden'}`}>
      <div className='relative w-full'>
        <div className=
        {`absolute right-2 bottom-2 justify-center items-center group-hover:flex group-hover:animate-slideup ${activeSong?.key === song.key ? 'flex' : 'hidden'}`}>
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            i={i}
          />
        </div>
        <img src={song.images?.coverarthq} alt='Song title' className='rounded-sm shadow'/>
      </div>
      <div className='flex flex-col mt-4'>
        <p className='text-white text-base font-semibold truncate'>
          <Link to={`/songs/${song?.key}`}> {song.title}</Link>
        </p>
        <p className='text-gray-500 text-sm truncate'>
          <Link to={song.artists?`/artists/${song?.artists[0]?.adamid}`: '/top-artists'}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard;
