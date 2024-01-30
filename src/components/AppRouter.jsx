import React,{Component} from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chatroom from "./Chatroom"
import DepartmentMsg from "./DepartmentMsg"
import Home from "./Home"
import Meeting from "./Meeting"
import Message from "./Message"
import Replies from "./Replies"
import StaffBoard from "./StaffBoard"
import StaffLogin from "./StaffLogin"
import StaffReg from "./StaffReg"
import StudentBoard from "./StudentBoard"
import StudentLogin from "./StudentLogin"
import StudentReg from "./StudentReg"


class AppRouter extends Component {
    render() {
      return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={
                <Home />
            }
             />
          <Route path="/login/staff" element={
                <StaffLogin />
            }
             />
        <Route path="/login/student" element={
                <StudentLogin />
            }/>
        <Route path="/register/staff" element={
            <StaffReg />}
            />
        <Route path="/register/student" element={
            <StudentReg />}
            /> 
                    <Route path="/dashboard/staff" element={
            <StaffBoard />}
            /> 
                     <Route path="/staff/message" element={
            <Message />}
            
            /> 
                  <Route path="/staff/replies" element={
            <Replies />}
            />
            
            <Route path="/dashboard/student" element={
            <StudentBoard />}
            /> 
            <Route path="/department/messages" element={
            <DepartmentMsg />}
            /> 
             <Route path="/chatroom" element={
            <Chatroom />}
            /> 
            <Route path="/meeting" element={
            <Meeting />}
            /> 
            
        </Routes>
        </BrowserRouter>
      )
    }
  }
  
  export default AppRouter