import React from 'react'
import Axios  from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Activity(props) {

  return (
    <div>
    <ul>
            <li className='p-4 w-[90%] border-0 rounded-md shadow-md bg-gray-100 text-cyan-900 my-2 cursor-pointer hover:shadow-lg lg:w-1/2'>You sent a message on {props.date}</li>

    </ul>
    </div>
  )
}

export default Activity
