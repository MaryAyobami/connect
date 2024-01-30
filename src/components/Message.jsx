import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import NavBar from './NavBar'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Message() {
  const [nav, setNav] = useState(false)
  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [message, setMessage] = useState('')
  
  const handleMessage = async(e)=>{
    e.preventDefault()
    await Axios.post('http://localhost:5000/api/send-msg',
    {
    title: title,
    message: message      
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
    <div className='bg-gray-50 w-screen h-full'>
      <NavBar />
        <div className='cursor-pointer text-4xl p-4  text-cyan-900'>
        <FaBars   onClick={()=>setNav(!nav)} />
        </div>
        <div  className='w-[90%] mx-auto pt-4 lg:w-[80%]'>
    
            <form action="">
               <div className='flex flex-col my-8 lg:my-4 '>
               <label htmlFor="" className='text-xl text-cyan-900'>Message Title</label>
                <input
                onChange={(e)=> setTitle(e.target.value)}
                type="text" className='border w-[100%] p-2 lg:w-[80%] border-gray-400 focus:outline-cyan-800' />
               </div>
               <div className='flex flex-col my-8 lg:my-4 '>
                <label htmlFor="" className='text-xl text-cyan-900'>Message Body</label>
                <textarea 
                onChange={(e)=> setMessage(e.target.value)}
                name="" id="" cols="30" rows="10" className='border w-[100%] p-2 lg:w-[80%] border-gray-400 focus:outline-cyan-800'></textarea>
               </div>
                <div className='flex flex-col my-8 lg:my-4'>
                <label htmlFor="" className='text-xl text-cyan-900'>Attachment</label>
                <input type="file" name="" id="" className='outline-none' />
                </div>
                <div className='flex flex-col my-8 lg:my-4'>
                  <label htmlFor="" className='text-xl text-cyan-900'>Select Prefered Social Media</label>
                  <div className='flex justify-between items-center w-1/2 my-2 text-cyan-900'>
                  <div><label htmlFor="">Twitter</label>
                 <input type="checkbox" name="Twitter" id="" className='m-2'/></div>
                  
                 <div><label htmlFor="">Whatsapp</label>
                 <input type="checkbox" name="Twitter" id="" className='m-2'/></div>
                  
                 <div><label htmlFor="">Telegram</label>
                 <input type="checkbox" name="Twitter" id="" className='m-2' /></div>

                  </div>
                  
                </div>
               <div className='flex justify-end'>
               <button 
               onClick={handleMessage}
               type="submit" className='bg-cyan-900 text-gray-200 px-8 py-4 hover:shadow-lg hover:px-10 '>SEND</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Message
