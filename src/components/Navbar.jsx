import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center gap-12 my-4'>
        <p className='text-blue-400 text-3xl'><Link to={'/'}>Home</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'about'}>About</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'services'}>Services</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'contactus'}>Contact Us</Link></p>
    </div>
  )
}

export default Navbar