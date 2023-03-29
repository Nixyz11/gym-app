import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row bg-neutral-600 text-white p-5 justify-start'>
      <img src='https://cdn-icons-png.flaticon.com/512/184/184931.png' className='mr-5 object-contain w-[25px] h-[25px]'/>
      <Link className='mx-5 text-lg  hover:text-yellow-400' to='/'>Home</Link>
      <Link  className='mx-5 text-lg hover:text-yellow-400' to='/'>Exercises</Link>
      
    </div>
  )
}

export default Navbar