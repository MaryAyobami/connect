import React, { useEffect } from 'react'
import background from './images/back.jpg'
import useState  from 'react-usestateref'
import {FaTimes,FaBars} from 'react-icons/fa'
import Activity from './Activity'
import { useNavigate } from 'react-router-dom'
import Auth from './Auth'
import Axios from 'axios'

function StaffBoard() {
    const[nav , setNav] = useState(false)
    const[staff, setStaff] = useState('')
    const navigate = useNavigate()
    const [activity, setActivity,reff] = useState([])
    useEffect(()=>{
      async function handleActivity(){
      await Axios.get('http://localhost:5000/api/staff-activity',
      {withCredentials:true})
      .then((response)=>{
        
        console.log(response.data[0].createdAt)

        setActivity([...response.data])
        console.log(reff.current[0])
      })
      .catch((error)=>
      console.log(error)
      )
    }
    handleActivity()
    },[setActivity])

    useEffect(()=>{
        async function handleStaff(){
        await Axios.get('http://localhost:5000/api/get-staff',
        {withCredentials:true})
        .then((response)=>{
          setStaff(response.data)
          console.log(response.data)
        })
        .catch((error)=>
        console.log(error)
        )
      }
      handleStaff()
    },[])

    return (
    <div className='bg-gray-200 w-screen h-screen'>
       <Auth />
        <div className=''>
        {nav ?      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>{setNav(false)}}>
                </div> : ''}
                <div className={ nav ? 'fixed top-0 left-0 w-[200px] h-screen bg-cyan-900 text-gray-200 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
                <FaTimes size={ 30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(false)}/>
                    <ul className='flex flex-col justify-center item-center mt-24 p-4'>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline ' ><a href="/staff/message">Send Message</a>
                      </li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '><a href="/staff/replies">View Replies</a></li>
                        <li className='my-6 text-xl  delay-150 transition ease-in hover:underline '>Meeting</li>
                    </ul>
                    
                </div>
               
            <section className='bg-cyan-900 text-white h-[40vh] '>
            
                <div className='cursor-pointer text-4xl p-4 ' >
                <FaBars  onClick={()=>setNav(!nav)} />
                </div>
                <section className=''>
                <div className="flex flex-col justify-center items-center h-[40vh]">
                    <h1 className="text-6xl">Hello {staff.name} <span>&#128075;</span></h1>
                    <p className='text-2xl cursor-pointer'   onClick={()=>setNav(!nav)}>What are you doing today?</p>
                </div>
                <div className='w-[90%] mx-auto'>
                    <p className='text-cyan-900 text-2xl mt-2
                    4 mb-1'>Your activities</p>
                 
                 {
                  reff.current.map((item)=>{
                
                      return <Activity date={item.message}/>
                     
                  })
                 } 
                </div>
                </section>
            </section>
        </div>
    </div>
  )
}

export default StaffBoard
