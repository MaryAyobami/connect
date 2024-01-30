import React,{ useState } from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import Axios from 'axios'

function StaffReg() {

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
  // register
const [fname, setFname] = useState('')
const [lname, setLname] = useState('')
const [email, setEmail] = useState('')
const [id , setId] = useState('')
const [department, setDepartment] = useState('')

const handleRegister = async(e)=>{
  e.preventDefault()
  await Axios.post('http://localhost:5000/api/register-staff',
  {
    firstname: fname,
    surname:lname,
    email,
    department,
    password: passwordInput,
    staffID: id
  },
  {withCredentials:true})
  .then((response)=>{
    console.log(response.data)
  })
  .catch((error)=>
  console.log(error)
  )
}

  return (
    <div className='bg-blue-100 bg- flex flex-row w-[70%] mx-auto mt-[4em]' >
       <section className='hidden lg:flex flex-1 p-8 text-gray-100 flex-col bg-cyan-700 items-center justify-center'>
       <div className='flex flex-col justify-center items-center'>
        <h1 className='text-7xl'>
          Welcome!
        </h1>
        <p className='text-xl'>Register as a <a href="/register/staff" className='text-blue-300 underline'>STAFF</a> or <a href="/register/student" className='text-blue-300 underline'>STUDENT</a></p>
       </div>
       <div className='absolute top-[75%] text-white'>
        Not new?<a href="/login/student" className='text-blue-300 underline'>sign in here</a>
       </div>
      </section>
     <section className='basis-[50%] border-0 bg-white  shadow-2xl p-4 text-cyan-700'>
     <div>
      <h1 className='mx-[3em] w-[90%] text-3xl text-cyan-900 mb-2'>Register</h1>
        <form action="" className='flex flex-col justify-between'>
        <div className='flex flex-col my-4'>
        <label htmlFor="">Firstname</label>
          <input 
          onChange={(e)=>setFname(e.target.value)}
          type="text"  className='w-[90%] text-gray-500 border-2 border-cyan-800 outline-none border-t-0 border-l-0 border-r-0 focus:border-b-cyan-500'/>
        </div>
          <div className='flex flex-col my-4'>
          <label htmlFor="">Lastname</label>
          <input
          onChange={(e)=>setLname(e.target.value)}
          type="text" className='w-[90%] text-gray-500 border-2 border-cyan-800 border-t-0 border-l-0 border-r-0 outline-none  focus:border-b-cyan-500'/>
          </div>

          <div className='flex flex-col my-2'>
          <label htmlFor="">Email</label>
          <input 
          onChange={(e)=>setEmail(e.target.value)}
          type="email" name="" id="" className='w-[90%] border-2 border-cyan-800 border-t-0 border-l-0 border-r-0 outline-none text-gray-500  focus:border-b-cyan-500' />
          </div>
          <div className='flex flex-col my-4'>
          <label htmlFor="">StaffID</label>
          <input 
          onChange={(e)=>setId(e.target.value)}
          type="text" className='w-[90%] border-2 border-cyan-800 outline-none border-t-0 border-l-0 border-r-0 text-gray-500  focus:border-b-cyan-500' />
          </div>
          <div className='my-4 flex flex-col '>
          <label htmlFor="" className='flex justify-between'><p>Password </p><button className="mx-8 my-0" onClick={togglePassword}>
                     { passwordType==="password"? <FaEyeSlash /> : <FaEye/> }
                     </button></label>
          <div>
          <input 
          type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className='relative w-[90%] border-2 text-gray-500 border-cyan-800 outline-none border-t-0 border-l-0 border-r-0  focus:border-b-cyan-500'/> 
         
          </div>
         
          </div>
          <div className=''>
          <label htmlFor="">Department : </label>
          <select onChange={(e)=> setDepartment(e.target.value)}  className='border-2 border-cyan-700 rounded-full p-1 mx-[1em] outline-cyan-500'>
            <option value="department1">Department1</option>
            <option value="department2">Department2</option>
            <option value="department3">Department3</option>
            <option value="department4">Department4</option>
            <option value="department5">Department5</option>
          </select>
          </div>
        <button 
        onClick={handleRegister}
        type="submit" className='border-0 mx-auto mt-8 px-10 py-2 bg-cyan-800 text-white hover:border-2 hover:border-cyan-800 hover:bg-transparent hover:text-cyan-800'>REGISTER</button>
         
        </form>
      </div>
     </section>
    </div>
  )
}

export default StaffReg

