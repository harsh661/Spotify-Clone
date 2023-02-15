import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'

const PlayPause = ({ isPlaying, activeSong, song , handlePause, handlePlay }) => {
  return(
    (isPlaying && activeSong?.key === song.key ? (
      <div 
      className='bg-green-500 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110'
      onClick={handlePause}>
        <BsFillPauseFill size={30}/>
      </div>
    ): (
      <div 
      className='bg-green-500 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110'
      onClick={handlePlay}>
        <BsPlayFill size={30}/>
      </div>
  )
))}

export default PlayPause;
