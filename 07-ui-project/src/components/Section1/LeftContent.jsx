import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between  '>
     <div className='p-6 gap-1 '>
      <h3 className="lg:mb-4 lg:text-4xl  leading-[1.1] font-bold">Prospective <br/> <span className='text-gray-600 '>customer</span> <br /> Segmentation </h3>
     <p className=" md:text-[24px]  font-normal text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officia aut. Vero ipsam esse asperiores quasi nihil harum reiciendis praesentium?</p>
     </div>
     <div className="text-9xl "></div>
     <div className="">< MoveUpRight lg:size={38} /> </div> 
    </div>
  )
}

export default LeftContent
 