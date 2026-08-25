import React from 'react'
import Scroll from './scroll'

const App = () => {
  function btnClicked() {
    console.log("Button clicked")
  }

  function changeOnSecondBar(val) {
    console.log(val)
  }

function onScrolling(){
  console.log("screen scrolling")
}
  return (
    <div>
      <h1>Hello,Priyanka</h1>
      <button onMouseEnter={function () {
        console.log("mouse entered")
      }} onClick={btnClicked} >change user </button>

      <input onChange={(elem) => {
        console.log("input bar clicked")
        console.log(elem.target.value)
      }} type="text" placeholder='search bar' />

      <input onChange={(elem1) => {
        changeOnSecondBar(elem1.target.value)
      }} type="text" placeholder='second search bar' />

      <div className="box"></div>
      
      
    </div>
  )
}

export default App
