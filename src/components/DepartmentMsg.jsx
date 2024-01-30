import React,{useEffect} from 'react'
import  Axios  from 'axios'
import useState from 'react-usestateref'
import Activity from './Activity'
import DepartmentMessage from './DepartmentMessage'

function DepartmentMsg() {

    const [messages, setMessages,reff] = useState([])
    useEffect(()=>{
      async function handleMessages(){
      await Axios.get('http://localhost:5000/api/get-msg',
      {withCredentials:true})
      .then((response)=>{
        
        setMessages([...response.data])
        console.log(reff.current[0])
      })
      .catch((error)=>
      console.log(error)
      )
    }
    handleMessages()
    },[setMessages])
  return (
    <div>
     <div className='w-[95%] mx-auto lg:w-[80%]'>
     <h1 className='my-8 text-2xl text-gray-800'> All Messages</h1>
        {
                  reff.current.map((item)=>{
                
                      return <DepartmentMessage sender={`Staff ${item.staff}`} content={item.message} message={item._id}/>
                  })
                 } 
     </div>
    </div>
  )
}

export default DepartmentMsg
