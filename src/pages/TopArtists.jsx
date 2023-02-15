import { ArtistCard, Error, Loader } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopChart = () => {
    const { data, isFetching, error } = useGetTopChartsQuery()
    if(isFetching) return <Loader internal={true}/>
    if(error) return <Error internal={true}/>


  return (
    <>
        <div className='flex w-full items-center justify-between sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='text-white text-2xl font-bold'>Top Songs</h2>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((artist, i) => (
            <ArtistCard 
                key={artist.key} 
                song={artist} 
                data={data}
                i={i}
            />
            ))}
        </div>
    </>
  )
}

export default TopChart
