import React from 'react'
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
         <div className="absolute top-0 left-0 h-full p-8  w-full  flex flex-col justify-between">
                <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-xl font-bold'>{props.id+1} </h2>
                <div className="">
                    <p className='text-lgleading-normal text-shadow-2xs text-white  mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo delectus in velit voluptatum expedita.</p>
                    <div className=" flex justify-between">
                        <button style={{backgroundColor:props.color}} className='text-white font-semibold px-4 py-2 rounded-full'> {props.tag} </button>
                        <button className='text-white font-medium px-2 py-2 rounded-full pb-2'><ArrowRight /></button>
                    </div>

                </div>
             </div>
  )
}

export default RightCardContent
