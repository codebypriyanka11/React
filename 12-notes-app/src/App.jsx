import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
   <form className='flex justify-between items-start  p-10'>
    <div className="flex  w-1/2 items-start gap-4 flex-col">
      <input className='px-5  mb-3 w-full  py-2  boreder-2 rounded' type="text" placeholder='Enter Notes Heading' />
   <input type="text" placeholder='Write Details  ' className='px-5 mb-3 w-full py-2 h-20  boreder-2 rounded' />
   <button className='bg-white w-full mb-3 text-black px-5 py-2 rounded'>Add Notes</button>
    </div>
<img className='h-52 rotate-y-180' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbXfQpqB0f6eKPLkI5nq5hOZhu6KsJRHwpF_s_4XUPw&s=10" alt="" />
   </form>
    
    </div>
  )
}

export default App
