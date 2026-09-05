import React from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()
const ThemeContext = (props) => {
  return (
    <div>
        {/* asa hamne is liya kiya kyo ki app themecontext ka child hai ab */}
        <ThemeDataContext.Provider value='Priyanak' > {props.children} </ThemeDataContext.Provider>
     
    </div>
  )
}

export default ThemeContext
