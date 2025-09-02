import {useEffect, useState} from 'react'

function Useeffecthook() {
    const [count, setCount] = useState(1)

    {/* whenever we use useEffect without any dependencies it will only run when the component in being changed, So below count is changing at every 2sec  */}
    useEffect (() => {
        setTimeout(() => {
            setCount(count => count+1)
        },2000)
    })
    
    {/* whenever we use useEffect with any dependencies it will only run ONCE when the component in being changed, So below count is being changed/increase to 1*/}

    const [inc, setInc] = useState(1)
    useEffect (()=> {
        setTimeout(() => {
            setInc(inc => inc+1)
        })
    }, [])

    {/* we can also pass a variable in dependencies in useEffect menas whenever the varibale the vsribale changes (that is passed in dependencies) will execute the callback the function + useEffect  */}

    const [cnt, setCnt] = useState(1)
    const [name, setName] = useState('Abdul Rahim')
    useEffect (() => {
        setTimeout(() => {
            setCnt(cnt => cnt+1)
            setName('Jamil Ahmed')
        },2000)
    }, [cnt, name]) // we can also add multiples variables in it

  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
        <h1 className='text-2xl'>I have rendered {count} times!</h1>
        <h1 className='text-2xl'>I have rendered {inc} times!</h1>
        <h1 className='text-2xl'>I have rendered {cnt} times! and name is {name}</h1>

        <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>
    </div>
  )
}

export default Useeffecthook