import React,{useEffect} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Auth() {
    const navigate = useNavigate()
    const [cookies,setCookie,removeCookie] = useCookies([])
    useEffect(() => {
      const verifyUser = async () => {
        if(!cookies.jwt) {
          navigate('/login/staff');
        }
        else{
          const {data} = await Axios.post(
            "http://localhost:5000",{},
            { withCredentials: true}
          );
          if(!data.status){
            removeCookie("jwt")
            navigate("/login/staff")
          }
          else{
            console.log(` Welcome ${data.user}`)
          }
        }
      };
      verifyUser();
    }, [cookies, navigate , removeCookie]);
  
    const logOut = () =>{
      removeCookie("jwt")
      navigate("/login/staff")
    }

  return (
    <div>
      
    </div>
  )
}

export default Auth
