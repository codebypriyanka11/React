import { useState } from "react"
import React from 'react'

const App = () => {
 
  const [title, settitle] = useState( ' ')
  function submitHandler(dets){
    dets.preventDefault()
       console.log('Form Submitted by',title)
       settitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}} >
        <input type="text" 
        value={title} 
        placeholder='Your Name' 
        onChange={(e) => {
        // console.log(e.target.value)
        settitle(e.target.value)
        }
        } />
        <button>Click</button>
      </form>
    </div>
  )
}

export default App
