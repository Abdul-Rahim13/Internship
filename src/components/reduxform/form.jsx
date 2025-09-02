import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, editUser, deleteUser, searchUser, userSlice, updateForm } from "./userslice";

function Form() {
    const dispatch = useDispatch()
    const form = useSelector((state) => state.user.form)
    const editButton = useSelector((state) => state.user.editButton)
    const users = useSelector((state) => state.user.users)
    const searchResults = useSelector(state => state.user.searchResults);
    const displayedUsers = searchResults.length > 0 ? searchResults : users;

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(updateForm({...form, [name]: value}))
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if(editButton){
            dispatch(saveUser(form))
        }
        else{
            dispatch(saveUser(form))
        }
    }

    const handleSearch = (e) => {
        dispatch(searchUser(e.target.value))
    }
  return (
    <div className='grid grid-cols-2 justify-center items-center gap-y-5 mt-15 ml-[-250px]'>
        <div className='flex justify-center items-center'>
            <form className='justify-center items-center' 
            onSubmit={handleSumbit}>

            <h1 className='mb-2'>Name:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' required type="text" name='name'  placeholder='Enter you name'
            value={form.name}
            onChange={handleChange}
            />

            <h1 className='mb-2 mt-2'>Phone No</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="number" required name='number' placeholder='Enter your number'
            value={form.number}
            onChange={handleChange}
            />

            <h1 className='mb-2 mt-2'>Email</h1>
            <input className='border-1 border-gray-700  w-55 pl-2 text-[12px]' type="email" name='email' required  placeholder='Enter your email' 
            value={form.email}
            onChange={handleChange}
            />

            <h1 className='mb-2 mt-2'>City:</h1>
            <input className='border-1 border-gray-700 w-55 pl-2 text-[12px]' type="text" name='city' required placeholder='Enter your city ' 
            value={form.city}
            onChange={handleChange}
            />

            <div className='flex flex-col justify-center items-center mt-10'>
                <button className='cursor-pointer h-10 w-25 bg-amber-100 rounded-2xl ' >{editButton ? "Edit data": "Save Data"}</button>
            </div>

        </form>
        </div>

        

         <div className='flex mb-50 h-24 flex-col w-[800px]'>
            <div className="flex justify-center mb-5">
                <input type="text" placeholder="Search..." className="w-80 px-4 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                 onChange={handleSearch}
                />
            </div>
            <h1 className='font-bold text-2xl'>Data Stored : </h1>
                <table>
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
                            displayedUsers.map((user, index) => {
                                return (
                                    <tr key={user.id} className='text-center'>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.number}</td>
                                        <td>{user.email}</td>
                                        <td>{user.city}</td>
                                        <td className='flex gap-5 mb-2 justify-center'>
                                            <button className='cursor-pointer h-8 w-25 bg-blue-400 rounded-2xl' 
                                            onClick={()=> dispatch(editUser(user.id))}>
                                                Edit
                                            </button>
                                            <button className='cursor-pointer h-8 w-25 bg-red-500 rounded-2xl'
                                            onClick={() => dispatch(deleteUser(user.id))}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div> 

    </div>
  )
}

export default Form