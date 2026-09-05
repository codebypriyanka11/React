import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
  const data =  useContext(ThemeDataContext)
  console.log(data)
  return (
    <div className='nav'>
      <h2 className="">{data} Raghochaten</h2>
      {props.children[0]}
      {props.children[1]}
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
