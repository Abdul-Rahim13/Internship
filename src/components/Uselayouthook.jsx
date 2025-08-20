import React, { useEffect, useLayoutEffect } from 'react'

function Uselayouthook() {

    //useEffect is called after rendering the UI element

    useEffect(()=> {
        console.log('Message from useEffect')
    },[])

    //useLayooutEffect is called before rendering the UI element 
    useLayoutEffect(()=>{
        console.log('Message from useLayoutEffect')
    },[])

  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
        <h1>Test Message</h1>
        {
            Array(40).fill(' ').map((item, index)=>(
                <li key={index}>{Math.pow(Math.random(),10)}</li>
            ))
        }
    </div>
  )
}

export default Uselayouthook