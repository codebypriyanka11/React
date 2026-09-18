import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div id='box' className="flex-shrink-0  bg-yellow-400 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">{data.taskCategory} </h3>
        <h4 className='text-sm'>{data.taskDate} </h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle} </h2>
       <p className=" text-sm mt-2 ">{data.taskDescription} </p>
       <div className="mt-2">
        <button className="w-full bg-red-500 ">Failed</button>
       </div>
      </div>
  )
}

export default FailedTask
