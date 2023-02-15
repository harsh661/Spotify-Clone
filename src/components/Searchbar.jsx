import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
  }

  return(
    <form onSubmit={handleSubmit} className="p-2 relative text-gray-900 md:pl-5 w-full focus-within:text-gray-600 flex items-center justify-center md:justify-start my-2" autoComplete="off">
      <div className="flex flex-row items-center bg-white max-w-[280px] lg:max-w-xl rounded-3xl">
        <FiSearch className="w-5 h-5 ml-4 absolute"/>
        <input
        type="search" 
        name="search" 
        id="search" 
        autoComplete="off" 
        placeholder="What do you want to listen to?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-transparent border-none text-black outline-none placeholder-gray-500 placeholder:text-sm text-base px-4 py-2 pl-10'
        />
      </div>
    </form>
)};

export default Searchbar;
