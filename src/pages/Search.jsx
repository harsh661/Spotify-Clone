import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Error, Loader, SongCard } from "../components"
import { useGetSearchItemsQuery } from "../redux/services/shazamCore"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";


const Search = () => {
  const { search } = useParams()
  const {activeSong, isPlaying} = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSearchItemsQuery(search)
  const songs = data?.tracks?.hits?.map((song) => song.track)
  const artists = data?.artists?.hits?.slice(0, 4).map((person) => person.artist)
  if(isFetching) return <Loader internal={true}/>
  if(error) return <Error internal={true}/>

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-white text-2xl font-bold my-5 flex-wrap flex">Here are the Results</h2>
      <div >
        <div className="w-full flex flex-col mb-4">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {artists?.map((artist, i) => (
                <SwiperSlide
                  key={artist?.key}
                  style={{ width:'25%', height:'auto'}}
                  className={`${!artist.avatar && 'hidden'} shadow-lg rounded-full animate-slideright`}>
                  
                  <Link to={`/artists/${artist.adamid}`} className='flex flex-col items-center'>
                    <img src={artist?.avatar} alt="" className="rounded-full w-full object-cover"/>
                    <h2 className="font-semibold text-gray-400 text-sm py-1 truncate">{artist.name}</h2>
                  </Link>

                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard 
            key={song.key}
            i={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default Search