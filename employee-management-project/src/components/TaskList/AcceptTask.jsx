import React from 'react'

const AcceptTask = () => {
  return (
   <div id='box' className="flex-shrink-0  bg-red-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">high</h3>
        <h4 className='text-sm'>24 jan 2024</h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
       <p className=" text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio. Quidem, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic debitis obcaecati?</p>
      <div className='flex justify-between mt-4 '>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
         <button className='bg-red-700 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
  )
}

export default AcceptTask
