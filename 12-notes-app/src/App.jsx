import { useState } from "react"
import React from 'react'

const App = () => {
  
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [Task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...Task];
    copyTask.push({title,details})
   setTask(copyTask)
    // console.log("Notes of :" ,title,"\n" , "Your Notes : " , details)
    console.log(Task);
    settitle('')
    setdetails('')
  }
  const deleteNotes = (idx) => {
    const copyTask = [...Task];
    // console.log(copyTask[idx]); 
    //  console.log(idx);
    copyTask.splice(idx,1);
    setTask(copyTask)
  }
  return (
    <div className='h-full sm:flex bg-black text-white '>
     
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-4   items-start sm:w-1/2 p-10'>
 <h1 className='text-xl font-bold'>Add Notes</h1>
        <input className='px-5  mb-3 w-full font-medium py-2  boreder-2 rounded' 
        type="text"
         placeholder='Enter Notes Heading'
value={title}
onChange={(e)=>{
  settitle(e.target.value)
}}
         />
        <textarea type="text"
        placeholder='Write Details  '
         className='px-5 mb-3 font-medium outline-none w-full py-2 h-32  boreder-2 rounded'
         value={details}
         onChange={(e)=>{
          setdetails(e.target.value)
         }} />
        <button className='bg-white w-full mb-3 text-black px-5 py-2 rounded active:scale-95'>Add Notes</button>

        {/* <img className='h-52 rotate-y-180' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbXfQpqB0f6eKPLkI5nq5hOZhu6KsJRHwpF_s_4XUPw&s=10" alt="" /> */}
      </form>
      <div className=" sm:w-1/2 border-solid sm:border-l-2  p-10">
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap  mt-5 gap-5 h-[90%] overflow-auto">
   {Task.map(function(elem,idx){
    return <div key={idx} className="h-52 px-4 py-9 w-60 rounded-2xl  text-black  flex flex-col justify-between items-start relative overflow-y-auto bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover"> 

    <h3 className="leading-tight text-xl pl-4 font-bold">{elem.title}</h3>

    <p className="mt-2 mb-3  leading-tight   font-normal ">{elem.details} </p>

    <button onClick={() => {
      deleteNotes(idx);
    } } className="bg-red-600 w-full cursor-pointer active:scale-95 text-white text-sm  font-bold rounded p-3 ">Delete Notes</button>
    
    </div>
    
   })}


        </div>
      </div>


    </div>
  )
}

export default App
