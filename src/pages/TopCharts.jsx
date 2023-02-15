import { useSelector } from 'react-redux'
import { SongCard, Loader, Error } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopChart = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery()
    if(isFetching) return <Loader internal={true}/>
    if(error) return <Error internal={true}/>

  return (
    <>
        <div className='flex w-full items-center justify-between sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='text-white text-2xl font-bold'>Top Songs</h2>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song, i) => (
            <SongCard 
                key={song.key} 
                song={song} 
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={data}
                i={i}
            />
            ))}
        </div>
    </>
  )
}

export default TopChart
