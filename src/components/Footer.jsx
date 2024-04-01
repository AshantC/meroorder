import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div>
      <p className='absolute bottom-0 w-full text-center h-7 items-center '>Copyright &copy; {currentYear}</p>
    </div>
  )
}

export default Footer
