import React from 'react'

const NavBar = () => {
  return (
    <div className='h-15 w-full flex items-center text-white justify-around text-2xl font-bold bg-[#302f2f]'>
      <h1 className='hover:scale-120 hover:ease-in-out duration-500'>Home</h1>
      <h1 className='hover:scale-120 hover:ease-in-out duration-500'>About us</h1>
      <h1 className='hover:scale-120 hover:ease-in-out duration-500'>Services</h1>
      <h1 className='hover:scale-120 hover:ease-in-out duration-500'>Help</h1>
    </div>
  )
}

export default NavBar