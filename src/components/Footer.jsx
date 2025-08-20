import {useContext} from 'react'
import { AppContext } from './Usecontexthook'

function Footer() {
    const {phone, name} = useContext(AppContext)
  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
        <h1 className='text-2xl'>Footer</h1>
        <h1 className='text-[15px]'>Phone No: {phone}</h1>
        <h1 className='text-[15px]'>Name: {name}</h1>
        <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>
    </div>
  )
}

export default Footer