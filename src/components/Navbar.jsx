import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between bg-black h-14 text-white px-6 items-center'>
        <h1 className='text-4xl font-bold'>Mero Order</h1>
        <ul>
            <li className='flex gap-3 text-lg'>
                <a href="/">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
