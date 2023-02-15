import { Link } from "react-router-dom";

const ArtistCard = ({ song }) => {
console.log(song.artists)
  return (
    <Link to={song.artists?`/artists/${song?.artists[0]?.adamid}`: '/top-artists'} className={`flex-col shadow-lg bg-[#181818] w-32 sm:w-48 sm:p-4 p-2 animate-slideup rounded-lg hover:bg-[#2a2a2a] transition-colors ease-in duration-300 group ${song.images ? 'flex': 'hidden'}`}>
      <div className='relative w-full'>
        <img src={song.images?.background} alt='Song title' className='rounded-sm shadow'/>
      </div>
      <div className='flex flex-col mt-4'>
        <p className='text-white text-base font-semibold truncate'>
          {song.subtitle}
        </p>
      </div>
    </Link>
  )
}

export default ArtistCard;
