import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
{/* vaha ham sikhne vala hai ki data kasa pass hota hai jasa app ---> navbar me ----> sidebar me ---> profile of user me ---> profile pic me
matlab me directly app se user profile me change nahi laa sakti jo small projects ka liya to thik hai lakin jab bada projects hta hai to muja data centerlized chahiya 
 maan lijya ap me netflix ka subscription liya hai jisa vo apne apna friend A ko diya or us ne apna dusra friend ko diya B ko to y ak lamba process tha is se cha aap us password ko bord par likh de or ab sabi ko access mil jayega ----> asa hi same hota hai context API me data centerlized ho jata hai
 or agar aap kabhi change karenge password to aap us board par bi change kar sakte hai  
 Context API ko samjana ka liya ham bas theen chiza chahiya
 1. Context 
 2. Provider
 3. Use context
 */}
const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme} >
        <h2>this is my nav bar </h2>
        <h2>this is very good to use </h2>
      </Navbar>
 
    </div>
  )
}

export default App
