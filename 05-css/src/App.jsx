import React from 'react'
import Button from './components/button/Button'
import Intro from './components/intro/Intro'

const App = () => {
  return (
    <div>
   <Button />
   <Intro />
    </div>
  )
}
// agar aap sare css ak hi css me (index.css) me likhte ho to problem aa jati hai in big progects 
// button.css or intro.css me bi problem hoti kyo ki ya collide kar jatahai 

export default App
