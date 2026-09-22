import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className=' h-[48%] sm:h-[45%] md:h-[55%]  w-full mt-8 py-5 flex gap-5 flex-nowrap items-center justify-items-start overflow-auto'>
     
    {data.tasks.map((elem, idx) =>{
      if(elem.newTask){
    return <NewTask key={idx} data={elem} />
   }
   if(elem.active){
    return <AcceptTask key={idx} data={elem} />
   }
   if(elem.completed){
    return <CompleteTask key={idx} data={elem} />
   }
   if(elem.failed){
    return <FailedTask key={idx} data={elem} />
   }

     })}
     

     
     
    </div>
  )
}

export default TaskList
