import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between'>
     <h2>Priyanaka Raghochaten</h2>
     <div className="flex gap-8">
        <a href="/">Home</a>
         <a href="/about">About</a>
         <a href="/contact">Contact</a>
        
     </div>
    </div>
  )
}

export default Navbar
