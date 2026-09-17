import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen object-cover' >
   <Header data={data} />
   <TaskListNumber data={data} />
   <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
