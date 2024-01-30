import React,{ useState } from 'react'
import {FaEye, FaEyeSlash, FaGithub, FaGoogle} from 'react-icons/fa'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function StaffLogin() {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const togglePassword =(e)=>{
      e.preventDefault()
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    
 // login
 const [email, setEmail] = useState('')
 const navigate = useNavigate() 
 const handleLogin = async(e)=>{
   e.preventDefault()
   await Axios.post('http://localhost:5000/api/login-staff',
   {
     email,
     password: passwordInput
   },
   {withCredentials:true})
   .then((response)=>{
     console.log(response.data)
     navigate('/dashboard/staff')
   })
   .catch((error)=>
   console.log(error)
   )
 }
  return (
    <div className='bg-blue-100 bg- flex w-screen mx-auto h-screen justify-center items-center ' >

    <div className='bg-cyan-700 bg- flex flex-row w-[70%] mx-auto ' >
      <section className='hidden lg:flex flex-1 p-8 text-gray-100 flex-col items-center justify-center'>
       <div className='flex flex-col justify-center items-center'>
        <h1 className='text-7xl'>
          Welcome!
        </h1>
        <p className='text-xl'>Login as a <a href="/login/staff" className='text-blue-300 underline active:underline-cyan-900'>STAFF</a> or <a href="/login/student" className='text-blue-300 underline'>STUDENT</a></p>
       </div>
       <div className='absolute top-[75%] text-white'>
        New Member? <a href="/register/staff" className='text-blue-300 underline'>sign up here</a>
       </div>
      </section>

     <section className='border-0 basis-[100%] bg-white  shadow-2xl py-8 px-4 text-cyan-700  lg:flex-1'>
     <div>
      <h1 className='flex justify-center text-3xl text-cyan-900 mb-2'>Login</h1>
         <div className='w-1/2 mx-auto flex flex-col items-center my-4'>
          <p>with</p>
          <button className='flex flex-row my-1 border-0 p-2 w-[100%] bg-cyan-800 text-white justify-center rounded-md transition ease-in-out delay-150   '><FaGoogle className='my-1 mr-2' /><span>Google</span></button>
          <button className='flex justify-center mb-1 border-0 p-2 w-[100%] bg-cyan-800 text-white rounded-md'><FaGithub className='my-1 mr-2' /><span>Github</span></button>
          <fieldset>
            <legend>or</legend>
          </fieldset>
         </div>
        <form action="" className='flex flex-col justify-between'>
          <div className='flex flex-col my-2'>
          <label htmlFor="">Email</label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
          type="email" name="" id="" className='w-[90%] border-2 border-cyan-800 border-t-0 border-l-0 border-r-0 outline-none text-gray-500  focus:border-b-cyan-500' />
          </div>
          <div className='my-4 flex flex-col '>
          <label htmlFor="">Password</label>
          <div>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className='relative w-[90%] border-2 text-gray-500 border-cyan-800 outline-none border-t-0 border-l-0 border-r-0  focus:border-b-cyan-500'/> 
          <button className="absolute " onClick={togglePassword}>
                     { passwordType==="password"? <FaEyeSlash /> : <FaEye/> }
                     </button>
          </div>
         
          </div>
          <button onClick={handleLogin} type="submit" className='border-0 mx-auto px-10 py-2 bg-cyan-800 text-white hover:border-2 hover:border-cyan-800 hover:bg-transparent hover:text-cyan-800'>LOGIN</button>
        </form>
      </div>
     </section>
    </div>
    </div>
  )
}

export default StaffLogin

