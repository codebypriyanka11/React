import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('') 
const [password, setpassword] = useState('')

    const submitHandler = (e) => {
e.preventDefault()
console.log("email is ", email)
console.log("Password is ",password)
setemail("")
setpassword("")
    }
  return (
    <div className='flex justify-center  h-screen w-screen items-center'>
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={(e) => {
            submitHandler(e)
        }}
         className='flex flex-col justify-center items-center' >

            <input 
            value={email}
            onChange={(e) => {
                setemail(e.target.value)
            }} 
            className='border-2 border-emerald-600 text-xl outline-none bg-transparent placeholder:text-gray-400 px-5 py-4 rounded-full' type="email" placeholder='Enter your Email' />

            <input required
             value={password}
            onChange={(e) => {
                setpassword(e.target.value)
            }} 
             className='border-2 border-emerald-600 text-xl outline-none bg-transparent mt-4 placeholder:text-gray-400 px-5 py-4 rounded-full'  type="password" placeholder='Enter your password' />

            <button required className=' bg-emerald-500 text-xl outline-none placeholder:text-white text-white px-25 py-3 rounded-full mt-7 border-none hover:bg-emerald-600'  >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
