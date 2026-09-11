import React from 'react'
import Header from '../Other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>

<div className="">
    <form >
        <h3 className="">
Task Title
        </h3>
<input type="text"  placeholder='Make a UI design' />
<h3 className="">Description</h3>
<textarea className='bg-white' name="" id=""></textarea>
<h3 className="">Date</h3>
<input type="date" />
<h3>Asign to</h3>
<input type="text" placeholder='employee name' />
<h3>Category</h3>
<input type="text" placeholder='Design,Dev,etc.' />
<button className="">
    Create Task
</button>
    </form>
</div>
    </div>
  )
}

export default AdminDashboard
