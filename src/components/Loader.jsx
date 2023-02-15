import { loading } from '../assets'

const Loader = ({internal}) => (
  <div className={`w-full h-screen ${internal ? 'bg-transparent' : 'bg-black'} flex items-center justify-center`}>
    <img src={loading} alt="Loader" width={80} className='animate-spin'/>
  </div>
);

export default Loader;
