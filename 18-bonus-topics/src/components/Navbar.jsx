import React from 'react'

const Navbar = (props) => {
 function changeTheme(){
  if(props.theme =='light'){
props.settheme('dark')
  } else{
    props.settheme('light')
  }

 }

  return (
    <div>
        <h3>{props.theme} </h3>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
