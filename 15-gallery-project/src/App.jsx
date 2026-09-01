import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () => {
    // console.log('Data aa gaya')
    // axios.post ka use ham request bajna ka lya karte hai 
    // axios.patch ka use update karna ka liya use hota hai
    // axios.delete delete ki request bajta hai
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    // console.log(response.data)
    setUserData(response.data)
  }


  useEffect(function () {
    getData()
  }, [index])


  let printUserData = <h3 className="text-gray-700 text-xs  top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ">loading... </h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx} target='_blank' >
        <Card elem={elem} />
      </div>
    })
  }


  return (
    <div

      className='bg-black overflow-auto h-screen p-4 text-white '>
      {/* <button className="bg-blue-800 mb-3 active:scale-95 text-white px-5 py-2 rounded" 
       onClick={getData}>Click</button> */}

      {/* this h1 is for to check on which index we are  */}
      {/* <h1 className='fixed text-2xl'>{index} </h1> */}
      <div className=" flex h-[82%] flex-wrap gap-4 p-2">
        {printUserData}
      </div>

      <div className=" flex justify-center  gap-6 items-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className='bg-amber-400 text-white text-sm active:scale-95 rounded px-4 py-2 '
          onClick={() => {
            // console.log('Prev button click')
            if (index > 1) {

              setindex(index - 1)
              setUserData([])
            }

          }}>Prev</button>
        <h3 className="">Page  {index} </h3>
        <button className='bg-amber-400 text-white text-sm curser-pointer active:scale-95 rounded px-4 py-2 '
          onClick={() => {
            // console.log('Next button click')
            setUserData([])
            setindex(index + 1)
          }}>Next</button>
      </div>
    </div>
  )
}

export default App
