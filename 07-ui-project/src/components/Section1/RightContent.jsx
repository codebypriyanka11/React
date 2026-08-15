
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props)
  return (
    <div id='right' className='h-full flex overflow-x-auto rounded-6xl flex-nowrap gap-4 w-2/3 p-6 '>
{props.users.map(function(elem,idx){
  return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
})}
    </div>
  )
}

export default RightContent
