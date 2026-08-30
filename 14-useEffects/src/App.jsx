
import React, { useEffect, useState } from 'react'


const App = () => {
const [num, setnum] = useState(0)
const [num2, setnum2] = useState(0)

  useEffect(function(){
   console.log('use effect is running ...');
  },[num])
  // --> yaha ye [] bracket DEPENDENY ARROW hai  

  return (
    <div>
    <h2>Value of num is {num} </h2>
    <h2>Value of num2 is {num2}</h2>
    <button onMouseEnter={() => {
      setnum(num+1)
    }}
    onMouseLeave={() => {
      setnum2(num2+5)
    }}>click</button>
    </div>
  )
}

export default App
