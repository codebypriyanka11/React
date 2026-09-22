import React from 'react'

const NewTask = ({data}) => {
  return (
    <div id='box1' className="flex-shrink-0  bg-red-600 h-full p-5 w-[300px] rounded-xl overflow-y-auto">
       <div className=" flex justify-between item-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-xl">{data.category} </h3>
        <h4 className='text-sm'>{data.taskDate} </h4>
       </div>
       <h2 className="mt-5 text-2xl font-semibold"> {data.taskTitle}</h2>
       <p className=" text-sm mt-2 "> {data.taskDescription}</p>
       <div className="mt-4">
        <button className=' bg-green-500 border-[1px]  border-green-600 py-1 px-2 text-sm '>Accept Task</button>
       </div>
      </div>   
  )
}

export default NewTask
