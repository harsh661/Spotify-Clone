import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { RiHome5Line, RiHome5Fill, RiSearchLine, RiSearchFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { BiLibrary } from 'react-icons/bi'
import { logo } from '../assets'

const Sidebar = () => {
  const { activeSong } = useSelector((state) => state.player)
  return (
    <>
    <div className='md:bg-black bg-gradient-to-t from-[rgba(0,0,0)] via-[rgba(0, 0, 0, 0.9)] to-transparent md:w-60 w-full md:p-6 p-3 fixed md:relative z-20 bottom-0'>
      <div className='w-32 hidden md:flex'>
        <img src={logo} alt="Spotify" />
      </div>
      <ul className='text-gray-400 md:py-8 flex md:flex-col md:gap-5 justify-around'>
        <NavLink style={({ isActive }) => isActive ? {color:'white'} : undefined} 
        to='/' end className='hover:text-white cursor-pointer flex items-center md:gap-4 md:flex-row flex-col'>
          <RiHome5Fill size={30}/>
          <span className='md:text-sm text-xs'>Home</span>
        </NavLink>
        <NavLink style={({ isActive }) => isActive ? {color:'white'} : undefined} 
        to='search' className='hover:text-white cursor-pointer flex items-center md:gap-4 md:flex-row flex-col'>
          <RiSearchLine size={30}/>
          <span className='md:text-sm text-xs'>Search</span>
        </NavLink>
        <NavLink style={({ isActive }) => isActive ? {color:'white'} : undefined} 
        to='discover' className='hover:text-white cursor-pointer flex items-center md:gap-4 md:flex-row flex-col'>
          <BiLibrary size={30}/>
          <span className='md:text-sm text-xs'>Library</span>
        </NavLink>
      </ul>
      <div></div>
    </div>
    </>
  )
}

export default Sidebar
