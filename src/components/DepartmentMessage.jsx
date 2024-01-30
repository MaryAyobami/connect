import React, { Component } from 'react'
import { FaDotCircle, FaPaperclip ,} from 'react-icons/fa';

import DepartmentMsg from './DepartmentMsg';
import Axios from 'axios'

export class DepartmentMessage extends Component {

    container = React.createRef();
    constructor(props){
      super(props)
      this.state = {
        open:false ,
        content: '',
        attachment: ''
     }
    }

    dropdown = () => {
        this.setState((state) => {
          return {
            open: !state.open,
          };
        });
      };    

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    // componentWillUnmount() {
    //   document.removeEventListener("mousedown", this.handleClickOutside);
    // }

    handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
  handleReply = async ()=>{
    await Axios.post("http://localhost:5000/api/sendreply",{
        message: this.props.message,
        content: this.state.content,
        attachment: this.state.attachment
    },{withCredentials: true}).
    then((response)=>{
        console.log(response.data)
    }).catch((error)=>
    console.log(error)
    )
    console.log('testig')
    console.log(this.state.content)
  }
  render() {
    return (
      <div >
    <section className='w-[90%]'>
    <div className='flex my-4 items-center'>
                <FaDotCircle className='text-red-900 mr-2'/>
                    <div onClick={this.dropdown} className='p-4 w-[100%] border-0 rounded-md shadow-md bg-gray-100 text-cyan-900 cursor-pointer hover:shadow-lg lg:w-1/2' ><p>{this.props.sender} sent a message.</p>
                    </div>
                </div>
                <div  ref={this.container} className=' bg-gray-300 text-red-900 selection:bg-cyan-800'>
                {this.state.open && 
                    <div className='p-4'>{this.props.content} </div>
                }
               <div>
           
               </div>
              
                </div>
                {/* <button onClick={this.dropdown}>REPLY</button> */}
               <div ref={this.container} className='my-4 '>
                {this.state.open &&
               <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <input type="text" className='border w-[80%] p-3 border-cyan-900 outline-red-700 text-cyan-900' onChange={(e)=> this.setState({content: e.target.value})} />
                    
                    <div className='flex py-4 '><label htmlFor="" className='px-4'><FaPaperclip/></label><input type="file" name="file" id="file" onChange={(e)=> this.setState({attachment: e.target.value})} /></div>
                </div>
                <button type="submit" className='flex justify-end  bg-transparent text-xl text-gray-800  ' onClick={this.handleReply}><p  className='hover:shadow-cyan-300 hover:text-gray-600'>REPLY</p></button>
                </div>
                }
               </div>
    </section>
      </div>
    )
  }
}

export default DepartmentMessage
