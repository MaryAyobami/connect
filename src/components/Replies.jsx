import React ,{useState}from 'react'
import {FaDotCircle} from 'react-icons/fa'

import {FaTimes,FaBars} from 'react-icons/fa'
import Activity from './Activity'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Reply from './Reply'



function Replies() {
    
    const[nav , setNav] = useState(false)
    const navigate = useNavigate()
  
    return (
    <div className='bg-gray-50 w-screen h-screen'>
     <NavBar/>

        <section>    
            <div  className='w-[90%] mx-auto pt-12 lg:w-[80%]'>
                <h1 className='text-2xl text-cyan-900 mb-12 lg:mb-10'>Messages from Web Development Department</h1>
                <div>
                    {/* <div >
                        <FaDotCircle className='text-red-900 mr-2'/>
                    <p clas>Ayobami sent a message</p>
                    </div> */}
                    <Reply />
                    <Reply />
                    <Reply />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Replies
