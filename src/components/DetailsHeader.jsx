import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="w-full relative flex flex-col mb-10">
        <div className="w-full sm:h-48 h-28 bg-gradient-to-tr from from-black">
          <div className="absolute inset-0 flex items-center">
            <img src={artistId? artistData?.attributes?.artwork.url.replace('{w}', '240').replace('{h}', '240') :songData?.images?.coverart} alt=""
            className="sm:w-48 w-28 sm:h-48 h-28 object-cover border-2 shadow-xl"
            />
            <div className="ml-5">
              <h2 className="font-bold sm:text-3xl text-2xl text-white">{artistId? artistData?.attributes?.name : songData?.title}</h2>

              {!artistId && (
                <Link to={`/artists/${songData?.artists[0].adamid}`} className="text-base font-semibold text-gray-400">{artistId? '':songData?.subtitle}</Link>
              )}

              <p className="text-base font-semibold text-gray-400">
                {artistId 
                  ? artistData?.attributes?.genreNames[0] 
                  : songData?.genres?.primary
                }
              </p>
            </div>
          </div>
        </div>
    </div>
  )
};

export default DetailsHeader;
