import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' h-[48%] sm:h-[45%] md:h-[55%]  w-full mt-8 py-5 flex gap-5 flex-nowrap items-center justify-items-start overflow-auto'>
      <div id='box' className="flex-shrink-0  bg-red-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">high</h3>
        <h4 className='text-sm'>24 jan 2024</h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
       <p className=" text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio. Quidem, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic debitis obcaecati?</p>
      </div>

      <div id='box' className="flex-shrink-0  bg-blue-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">high</h3>
        <h4 className='text-sm'>24 jan 2024</h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
       <p className=" text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio. Quidem, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic debitis obcaecati?</p>
      </div>

      <div id='box' className="flex-shrink-0  bg-yellow-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">high</h3>
        <h4 className='text-sm'>24 jan 2024</h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
       <p className=" text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio. Quidem, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic debitis obcaecati?</p>
      </div>

      <div id='box' className="flex-shrink-0  bg-green-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">high</h3>
        <h4 className='text-sm'>24 jan 2024</h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
       <p className=" text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio. Quidem, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic debitis obcaecati?</p>
      </div>
     
    </div>
  )
}

export default TaskList
