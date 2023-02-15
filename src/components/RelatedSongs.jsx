import SongBar from './SongBar'

const RelatedSongs = ({ data, artistId, isPlaying, activeSong }) => {

  return(
    <div className='flex flex-col'>
        <h2 className='text-white font-bold text-2xl'>Related songs</h2>
        <div className='mt-6 w-full flex flex-col gap-5'>
          {data?.map((song, i) => (
            <SongBar 
              key={artistId}
              i={i}
              song={song}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </div>
    </div>
)};

export default RelatedSongs;
