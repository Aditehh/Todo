import React from 'react'

const Navbar = () => {
  
  return (
    <nav className='flex items-center-safe justify-between bg-purple-400 text-white h-15 '>
      <div className="logo">
        <span className='font-bold mx-8 cursor-pointer hover:font-extrabold'>DO-Things</span>
      </div>
      <ul className="flex gap-10 mx-9">
        <li className='cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Home</li>
        <li className='cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Contact Us</li>
        <li className='cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
