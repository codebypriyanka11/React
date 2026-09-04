import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='nav'>
        <h3>Priyanaka Raghochaten </h3>
        <div className="">
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/product' >Product </Link>

        {/* basic setup 

         nested routes 
 
        dynamic routes 
 
        usenavigate 
 
         404 page */}
        </div>
      </div>
  )
}

export default Navbar
