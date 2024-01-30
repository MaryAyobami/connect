import React,{useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const[nav , setNav] = useState(false)
    const navigate = useNavigate()

  return (
    <div>
        {nav ?      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>{setNav(false)}}>
                </div> : ''}
                <div className={ nav ? 'fixed top-0 left-0 w-[200px] h-screen bg-cyan-900 text-gray-200 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
                <FaTimes size={ 30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(false)}/>
                    <ul className='flex flex-col justify-center item-center mt-24 p-4'>
                    <li className='my-6 text-xl  delay-150 transition ease-in hover:underline ' ><a href="/dashboard/staff">Dashboard</a>
                      </li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline ' ><a href="/staff/message">Send Message</a>
                      </li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '><a href="/staff/replies">View Replies</a></li>
                       <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '><a href="/chatroom">Chatroom</a></li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '><a href="/meeting">Meeting</a></li>
                    </ul>
                    
                </div>
        
               <div className='absolute top-0  left-0 m-4 text-cyan-900 text-4xl '>
               <FaBars  onClick={()=>setNav(!nav)} />
               </div>
    </div>
  )
}

export default NavBar
