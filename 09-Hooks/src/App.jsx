 // useState :-- me jab hamra koi component apni state change karta hai jasa count badhana image chage hona etc. 
// useEffect :-- me hamara effect side by side chalata rahai ta hai like to cars moving parellely. 
// useRef:-- kisi bi DOM element ko select  karna ka kam karta hai
// useContext:-- globaol context ko use karna ki kosis karega
// useReducer :-- advance of useContext 
// it is like useState --advance--> useContext --advance--> useReducer
// useMemo and useCallback --> use for optimization

import React, { useState } from 'react';
const App = () => {
 const [num, setnum] = useState(10)
 const [userName, setuserName] = useState('Priyanka')
 function changeA(){
    setnum(30);
    setuserName('Ananya');
 }
 const [dit, setdit] = useState(0)
 function increseNum(){
    setdit(dit+1);
 }
function decreseNum(){
    setdit(dit-1);
 }

  return (
    <div>
      <h1 className="">Value of a is {num} , and user Name is {userName}</h1>
      <button onClick={changeA} >Click</button>


      <h1 className="digit">{dit}</h1>
      <button className="inc" onClick={increseNum}>Increse</button>
      <button className="dec" onClick={decreseNum}>Decrese</button>
    </div>
  )
}

export default App
