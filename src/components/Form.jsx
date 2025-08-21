import React, { useState } from 'react'

function Form() {
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name: '',
        number: ' ',
        email: ' ',
        city: ' '
    })

    const addData = (e) => {
        e.preventDefault()
        if(!form.name || !form.number || !form.email || !form.city){
            alert("Please Enter All Fields")
            return
        }
        setData([...data, form])
        setForm({name: '',number: '',email: '',city: ''})
    }

    
    const handleInputs = (e) => {
        
      const  name = e.target.name
       const value = e.target.value

        setForm({...form, [name]:value})
    }

  return (
    <div className='flex flex-col justify-center items-center gap-y-5 mt-15'>
        <form className='justify-center items-center'>

            <h1 className='mb-2'>Name:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="text" name='name'  placeholder='Enter you name' 
            value={form.name}
            onChange={handleInputs}/>

            <h1 className='mb-2 mt-2'>Phone No</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="number" name='number' placeholder='Enter your number' 
            value={form.number} 
            onChange={handleInputs} />

            <h1 className='mb-2 mt-2'>Email</h1>
            <input className='border-1 border-gray-700  w-55 pl-2 text-[12px]' type="email" name='email'  placeholder='Enter your email' 
            value={form.email} 
            onChange={handleInputs}/>

            <h1 className='mb-2 mt-2'>City:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="text" name='city'  placeholder='Enter your city ' 
            value={form.city} 
            onChange={handleInputs}/>

            <div className='flex flex-col justify-center items-center mt-10'>
                <button className='cursor-pointer h-10 w-25 bg-amber-100 rounded-2xl ' onClick={addData}>Add Data</button>
            </div>

        </form>

        <div>
            <h1 className='font-bold'>Data Stored : </h1>
            <ol>
                {
                    data.map((item) => (
                        <li>Name: {item.name} - Phone No: {item.number} - Email:  {item.email} - City: {item.city}</li>
                    ))
                }
            </ol>
        </div>


    </div>
  )
}

export default Form