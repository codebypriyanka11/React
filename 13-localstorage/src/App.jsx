import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
    localStorage.setItem('user','Priyanka');
      const user = localStorage.getItem('user')
      console.log(user);
      localStorage.removeItem('user')
      const information = {
        username : 'Priyanka',
        age : 21,
        city : "sonipat"
      }
// ya agar ap console me get kare ge by localStorage.getItem('infor') se to ya app ko string form n=me milega 
      localStorage.setItem('infor', JSON.stringify(information))

      const infor = JSON.parse(localStorage.getItem('infor'))
      console.log(infor)
            
async function getData () {
  // fetch api using fetch
      //  const response =await fetch('https://jsonplaceholder.typicode.com/todos')
      //  const data = await response.json()
      //  console.log(data);

      // fect using axios
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(data);

      }


      const [Img, setImg] = useState([])
      const getImage = async () => {
        const responseImg = await axios.get('https://picsum.photos/v2/list')
        console.log(responseImg.data);
        setImg(responseImg.data)
        
      }
  return (

    <div>
    <button onClick={getImage}>Get Data </button>
    <div>
      {Img.map(function(elem,idx){
       return (
        
        <div className='card' >
          <h1 className='author'>{elem.author} </h1>
          <img   src={elem.download_url} alt="" />
        </div>
       )
      })}
    </div>
    </div>
  )
}

export default App
