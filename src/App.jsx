import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useGetTopChartsQuery } from './redux/services/shazamCore';
import { Searchbar, Sidebar, MusicPlayer, TopPlay, Loader, Error } from './components';
import { ArtistDetails, TopArtists, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const { isFetching, error } = useGetTopChartsQuery()

  if(isFetching) return <Loader title="Loading songs..." />

  if(error) return <Error/>

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-t from-[#121212] via-[#171717] to-[#281111]">
            <Searchbar/>
        <div className="sm:px-6 px-4 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:search" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky xl:flex relative top-0 h-fit hidden">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute py-2 md:rounded-none rounded-xl md:h-28 md:bottom-0 bottom-[70px] left-0 right-0 flex animate-slideup md:bg-[#121212] border-t border-[#191919] bg-[#281111] z-20">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
