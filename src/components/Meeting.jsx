import React from 'react'
import Axios from 'axios'
import NavBar from './NavBar';

function Meeting() {
   const createMeeting = () => {
    const data = {
        email: "ogunmolamaryayobami@gmail.com",
      };
      Axios
        .post(`http://localhost:5000/meeting`, data)
        .then((response) => {
          let URL =
            response.data.join_url.replaceAll(
              "https://us04web.zoom.us/j/",
              "http://localhost:9999/"
            ) + `?role=1?name=bami`;
          console.log(URL);
          window.location.replace(`${URL}`);
        })
        .catch((err) => console.error(err));
   }


  return (
    
    <div className='bg-cyan-50 h-screen w-screen text-center justify-center flex items-center'>
        <NavBar/>
        <div onClick={createMeeting} className='text-2xl text-cyan-100 font-semibold border py-10 px-1 w-[70%] bg-cyan-700 rounded-full shadow-cyan-500 cursor:pointer hover:bg-cyan-900 lg:text-3xl lg:w-[30%]'>Start a meeting</div>
    </div>
  )
  }

export default Meeting