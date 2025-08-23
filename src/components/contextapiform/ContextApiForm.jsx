import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [serch, setSearch] = useState([])
  const [isEditButton, setEditButton] = useState(false)
  const [editindex, setEditindex] = useState(null)
  const [data, setData] = useState([
    {name: 'abdul rahim', number: '03151464618',email:'rahim12@gmail.com',city: 'lahore'},
    {name: 'talha', number: '03349790979',email:'talha23@gmail.com',city: 'islamabad'},
    {name: 'ahmed', number: '0334286614',email:'ahmed85@gmail.com',city: 'multan'}
  ])
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
    if (!form.name || !form.number || !form.email || !form.city) {
      if (!form.name) {
        alert("Name is Empty")
      } else if (!form.number) {
        alert("Number is Empty")
      } else if (!form.email) {
        alert("Email is Empty")
      } else if (!form.city) {
        alert("City is Empty")
      }
  return; 
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
      const duplicateEmail = data.find((item) => item.email === form.email)
      if(duplicateEmail){
      alert("Email already exsist")
      return
    }
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

  const Search = (e)=> {
    const keyword = e.target.value.toLowerCase()
    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(keyword)
    })

    setSearch(result)
    console.log(result)
  }


  return (
    <AppContext.Provider value={{handleInputs, data, form, addData, isEditButton, handleEdit, handleDelete, Search, serch}}>
      {children}
    </AppContext.Provider>
  );
};
