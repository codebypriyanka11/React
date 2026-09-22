import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
const [username, setUsername] = useState('')
// if(!data){
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }


const logOutUser = () => {
localStorage.setItem('loggedInUser','')
props.changeUser('')
// window.location.reload()
}


  return (
    <div className='flex  items-end  justify-between'>
      <h1 className='text-2xl font-medium'>hello, <br/><span className='text-3xl font-semibold'>   {props.data?.firstName || 'Admin'} 👋</span> </h1>
      <button onClick={
logOutUser
      } className='bg-red-600 text-white text-lg font-medium px-5 rounded  py-2'>Log Out</button>
    </div>
  )
}

export default Header
