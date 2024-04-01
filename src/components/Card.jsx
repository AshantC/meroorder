import React from 'react'

const Card = () => {
  return (
    <div className='card border bg-pink-500 w-[180px] h-56 relative'>
      <img src="#" alt="image" className='bg-yellow-400 h-36' />
      <div className='details'>
        <h3 className='absolute bottom-11 text-center w-full'>Card Title</h3>
        <p className='absolute bottom-7 text-center w-full'>Rs: 100</p>
        <button className='absolute bottom-1 text-center w-full border bg-gray-500 text-white'>Give Order</button>
      </div>
    </div>
  )
}

export default Card
