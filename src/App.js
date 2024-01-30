import { useState , useEffect } from 'react';
import Axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  useEffect(()=>{
    async function handleMessage(){
    await Axios.get('http://localhost:5000/main-page',
    {withCredentials:true})
    .then((response)=>{
      setMessage(response.data)
    })
    .catch((error)=>
    console.log(error)
    )
  }
  handleMessage()
},[])


  return (
    <div className="App">
      <h1 className='text-5xl text-center py-20'>{message}</h1>
    </div>
  );
}

export default App;
