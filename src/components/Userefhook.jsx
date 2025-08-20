import React, { useEffect, useRef, useState } from 'react'

function Userefhook() {

    const [value, setValue] = useState(0)
    const count = useRef(0) // useRef doesnot rerender the component when the value is changed & it is also used to access the DOM elements

    useEffect(() => {
        count.current = count.current+1
    })

    const inc = (() => {
        setValue(value => value + 1)
    })
    const dec = (() => {
        setValue(value => value - 1)
    })

    const inputElement = useRef()
    const btnclicked = () => {
        inputElement.current.style.background = 'blue'
    }


  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
        <button onClick={inc} className='cursor-pointer w-25 bg-amber-100 rounded-2xl'>+1</button>
        <h1>{value}</h1>
        <button onClick={dec} className='cursor-pointer w-25 bg-amber-100 rounded-2xl'>-1</button>
        <h1>Render Count: {count.current}</h1>

        <div className='flex flex-row justify-center items-center gap-x-5'>

            <input className='bg-gray-200' type="text"  
            ref={inputElement}/>
            <button onClick={btnclicked} className='cursor-pointer w-25 bg-amber-100 rounded-2xl'> Click Here!</button>

        </div>
    </div>
  )
}

export default Userefhook