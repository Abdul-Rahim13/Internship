import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isEditButton, setEditButton] = useState(false)
  const [editindex, setEditindex] = useState(null)
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    name: '',
    number: 0,
    email: '',
    city:''
  })

  const handleInputs = (e)=>{
    const name = e.target.name
    const value = e.target.value 
    
    if(name === "number"){
      if(/^[0-9]+$/.test(value)){
        setForm({...form, [name]:value})
      }}else{
        setForm({...form, [name]:value})
      }
  }

  const addData = (e) => {
    e.preventDefault()
    if(!form.name || !form.number || !form.email || !form.city){
      alert("Please Fill All the Inputs")
      return
    }

    if(!form.name){
      alert("Name is Empty")
      return
    }else if(!form.number){
      alert("Number is Empty")
      return
    }else if(!form.email){
      alert("Email is Empty")
      return
    }else if(!form.city){
      alert("City is Empty")
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(form.email)){
      alert("please Enter a valid Email Address")
      return
    }

    if(isEditButton && editindex !== null){
      const updateData = [...data]
      updateData[editindex] = form
      setData(updateData)
        setEditButton(false)
        setEditindex(null)
      }else{
        setData([...data, form])
      }
        
      setForm({name: '',number: 0,email: '',city: ''})
  }

  const handleEdit = (index) => {
    setEditButton(true)
    setEditindex(index)
    const selectedData = data[index]
    if(selectedData){
      setForm({
        name: selectedData.name,
        number: selectedData.number,
        email: selectedData.email,
        city: selectedData.city
      })
    }
  }
   const handleDelete = (index) => {
      const updateData = data.filter((item, idx) => idx !== index)
      setData(updateData)
    }


  return (
    <AppContext.Provider value={{handleInputs, data, form, addData, isEditButton, handleEdit, handleDelete}}>
      {children}
    </AppContext.Provider>
  );
};
