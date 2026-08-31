import React from 'react'

const Card = () => {
  return (
    <div>
      <a href={elem.url}>
       <div className='h-40 w-44 bg-white'>
      <img className='h-full w-full overflow-hidden object-cover' src={elem.download_url} alt="" />
    </div>
     <h2 className='font-bold text-lg'>{elem.author} </h2>
    </a>
    </div>
  )
}

export default Card
