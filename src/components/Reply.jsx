import React, { Component } from 'react'
import { FaDotCircle } from 'react-icons/fa';

export class Reply extends Component {

    container = React.createRef();
    constructor(props){
      super(props)
      this.state = {
        open:false 
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
  
  render() {
    return (
      <div >
    <section className='w-[90%]'>
    <div className='flex my-4 items-center'>
                <FaDotCircle className='text-red-900 mr-2'/>
                    <div onClick={this.dropdown} className='p-4 w-[100%] border-0 rounded-md shadow-md bg-gray-100 text-cyan-900 cursor-pointer hover:shadow-lg lg:w-1/2' ><p> Ayobami sent a message.</p>
                    </div>
                </div>
                <div  ref={this.container} className=' bg-gray-300 text-red-900 selection:bg-cyan-800'>
                {this.state.open && 
                    <div className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis, neque error assumenda necessitatibus ullam sed vel perspiciatis mollitia rem omnis iste ipsam corrupti harum excepturi tenetur pariatur itaque! Tempora?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis autem dolorum necessitatibus in alias voluptate quo animi porro asperiores pariatur! </div>
                }
                </div>
    </section>
      </div>
    )
  }
}

export default Reply
