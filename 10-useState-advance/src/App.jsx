import React, { useState } from 'react';

const App = () => {
  const [num, setnum] = useState({user:'Priyanka',age:21 })
  const change = () => {
    // asa ham isliya karta hai taki phale bar me num change hone par console ma bi num change ho
    // const newNum = {...num};
    // newNum.user = 'Ananya'
    // newNum.age = 7
    // setnum(newNum)
    
    setnum(prev=>({...prev,age:12}) )
    
  }

const [digit, setdigit] = useState(12)
function changeOnClick(){
  setdigit(prev=>(prev+1))
   setdigit(prev=>(prev+1))
    setdigit(prev=>(prev+1))
}
  return (
    <div>
      <h1>{num.user} , { num.age} </h1>
      <button onClick={change}>click</button>

      <h1 className="digit">{digit}</h1>
      <button className="inc" onClick={changeOnClick}>Increse</button>
    </div>
  )
}

export default App
