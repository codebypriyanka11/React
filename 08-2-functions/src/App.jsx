import React from 'react'

const App = () => {
  function onScrolling(){
    console.log("Page is Scrolling")
  }
   const pageScrolling = (dets) => {
    // console.log(`page is scrolling at speed :`, dets);
    if(dets>0){
      console.log('seedha scrolling')
    }else{
      console.log('ulta scrolling');
      
    }
   }
  return (
    // <div onScroll={onScrolling}>
    <div onScroll={(elem) => {
      // ya batata hai kii appki scroll karta time kya speed hai
      console.log(elem.deltaY);
pageScrolling(elem.deltaY);
    }}>
      {/* scrolling is not working  */}
      <div className="page1"></div>
      <div className="page2"></div>
   <div className="page3"></div>

   
    </div>
  )
}

export default App
