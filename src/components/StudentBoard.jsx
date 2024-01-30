import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import background from './images/back.jpg'
import {FaTimes,FaBars} from 'react-icons/fa'
import Activity from './Activity'
import AuthStudent from './AuthStudent'


function StudentBoard() {
  const[nav , setNav] = useState(false)
  const navigate = useNavigate()
    return (
    <div className='bg-gray-200 w-screen h-screen'>
      <AuthStudent/>
        <div className=''>
        {nav ?      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>{setNav(false)}}>
                </div> : ''}
                <div className={ nav ? 'fixed top-0 left-0 w-[200px] h-screen bg-cyan-900 text-gray-200 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
                <FaTimes size={ 30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(false)}/>
                    <ul className='flex flex-col justify-center item-center mt-24 p-4'>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline ' ><a href="/department/messages">View Messages</a>
                      </li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '>Meeting</li>
                    </ul>
                    
                </div>
               
            <section className='bg-cyan-900 text-white h-[40vh] '>
            
                <div className='cursor-pointer text-4xl p-4 '  onClick={()=>setNav(!nav)}>
                <FaBars />
                </div>
                <section className=''>
                <div className='w-[90%] mx-auto'>
                    <p className='text-cyan-900 text-2xl mt-2
                    4 mb-1'>Your activities</p>
                
                </div>
                </section>
            </section>
        </div>
    </div>
  )
}

export default StudentBoard
