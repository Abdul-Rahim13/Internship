import React, { useState } from 'react'
import useToggle from './Usetoggle'

function Customhook() {
    const [value, toggleValue] = useToggle(false)
  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
        <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' onClick={toggleValue}>Toggle Heading</button>
        <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' onClick={() => toggleValue(true)}>Show Heading</button>
        <button className='cursor-pointer w-25 bg-amber-100 rounded-2xl' onClick={() => toggleValue(false)}>Hide Heading</button>
        {
            value? <h1>Custom Hooks in React js</h1>:null
        }
        <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>
    </div>
  )
}

export default Customhook