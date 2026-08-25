import React from 'react'

const Scroll = () => {
    function onScrolling(dets){
        console.log("scrolling ...");
    }
  return (
    <div className='parent' onScroll={onScrolling()}  >
        <div className="page1">
            <h1>hello</h1>
        </div>
      
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
  )
}

export default Scroll
