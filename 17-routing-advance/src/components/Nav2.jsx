import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate()
  return (
    <div className='py-3 px-5 bg-cyan-600'>
       <button onClick={ () => {
   navigate('/')
  }} className='bg-amber-500 py-5 px-5 rounded cursor-pointer active:scale-95 m-4'>Return to home page</button>
  <button onClick={ () => {
   navigate(-1)
  }} className='bg-amber-500 py-5 px-5 rounded cursor-pointer active:scale-95 m-4'>Back</button>
  <button onClick={ () => {
   navigate(+1)
  }} className='bg-amber-500 py-5 px-5 rounded cursor-pointer active:scale-95 m-4'>Next</button>
    </div>
  )
}

export default Nav2
