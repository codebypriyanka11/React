import React from 'react'
import Card from './components/card'
const App = () => {
  return (<div className="parent">
    
  <Card  users ="ananya" age={7} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdRIoWmVlJz1VZp2gNHWevR6s1AGlwm_Hqfi8p1cwwbjUQethuaShFpmr&s=10" />
   <Card  users ="anmol" age={5} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz_uXJ3pWNzndxv4HtU9QZroaxEyo1AkC1iMoUHe6Uw&s=10"/>
   <Card users="anant" age={5} img="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" />
    </div>
  )
}

export default App
