import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
        <div className="bg-red-400 px-9 py-6 rounded-xl w-[45%]">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>

        <div className="bg-blue-400 px-9 py-6 rounded-xl w-[45%]">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>

        <div className="bg-green-400 px-9 py-6 rounded-xl w-[45%]">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
      
      <div className="bg-yellow-400 px-9 py-6 rounded-xl w-[45%]">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
