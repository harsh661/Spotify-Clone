import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery } from '../redux/services/shazamCore'

const SongDetails = () => {
    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: songData, isFetching: isFetchingSongDetails, error } = useGetSongDetailsQuery({ songid })
    // const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery({ songid })

    if(isFetchingSongDetails) return <Loader internal={true}/>
    if(error) return <Error internal={true}/>

  return (
    <div className='flex flex-col'>
        <DetailsHeader artistid='' songData={songData}/>
        <div className="mb-10">
            <h2 className='text-white font-bold text-2xl'>Lyrics</h2>
            <div className='mt-5'>
                {songData?.sections[1].type === "LYRICS"?
                    songData?.sections[1].text.map((line, i) => (
                        <p className='text-gray-400 text-lg my-2 animate-slideup'>{line}</p>
                    )) : <p className='text-gray-400 text-lg my-2 animate-slideup'>Oops! No Lyrics Found</p>}
            </div>
        </div>
        {/* <RelatedSongs 
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
        /> */}
    </div>
  )
}

export default SongDetails