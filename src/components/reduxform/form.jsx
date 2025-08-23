

function Form() {
  return (
    <div className='grid grid-cols-2 justify-center items-center gap-y-5 mt-15 ml-[-250px]'>
        <div className='flex justify-center items-center'>
            <form className='justify-center items-center'>

            <h1 className='mb-2'>Name:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' required type="text" name='name'  placeholder='Enter you name'/>

            <h1 className='mb-2 mt-2'>Phone No</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="number" required name='number' placeholder='Enter your number'
            />

            <h1 className='mb-2 mt-2'>Email</h1>
            <input className='border-1 border-gray-700  w-55 pl-2 text-[12px]' type="email" name='email' required  placeholder='Enter your email' 
            />

            <h1 className='mb-2 mt-2'>City:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="text" name='city' required placeholder='Enter your city ' 
            />

            {/* <div className='flex flex-col justify-center items-center mt-10'>
                <button className='cursor-pointer h-10 w-25 bg-amber-100 rounded-2xl ' >{isEditButton ? "Edit data": "Save Data"}</button>
            </div> */}

        </form>
        </div>

        {/* <div className='flex mb-50 h-24 flex-col w-[800px]'>
            <h1 className='font-bold text-2xl'>Data Stored : </h1>
                <table >
                    <thead className='text-center font-semibold text-[18px]'>
                        <tr>
                            <td>Sr No:</td>
                            <td>Name</td>
                            <td>Number</td>
                            <td>Email</td>
                            <td>City</td>
                            <td>Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.email}</td>
                                        <td>{item.city}</td>
                                        <td className='flex gap-5 mb-2 justify-center'>
                                            <button className='cursor-pointer h-8 w-25 bg-blue-400 rounded-2xl' >Edit</button>
                                            <button className='cursor-pointer h-8 w-25 bg-red-500 rounded-2xl'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div> */}

    </div>
  )
}

export default Form