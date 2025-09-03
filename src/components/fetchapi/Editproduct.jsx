import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function Editproduct() {

    const {id} = useParams()
    const navigate = useNavigate()
    const [form, setformData] = useState({
        id: '',
        title: '',
        price: 0.00,
        description: '',
        category: '',
        image: '',
    })

    const fecthData = async() => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setformData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fecthData()
    }, [id])


    const handleInputs = (e)=>{
        const name = e.target.name
        const value = e.target.value
        if (name === 'id' || name === 'price') {
            if (value === '' || (/^\d*\.?\d*$/.test(value) && Number(value) >= 0)) {
                setformData({...form, [name]: value === '' ? 0 : Number(value)})
            }
        } else {
            setformData({ ...form, [name]: value })
        }
    }

    const updatedData = async(e)=>{
         e.preventDefault()
        try {
            const res = await axios.put(`https://fakestoreapi.com/products/${id}`, form, {headers: {'Content-Type': 'application/json'}})
            alert("Product updated successfully!");
            navigate(`/products/${id}`, { state: res.data })
            navigate(`/`, {state: {updatedData: res.data}})
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <form
         onSubmit={updatedData}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Product</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ID</label>
          <input
            type="number"
            name="id"
            value={form.id}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product ID"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="0.00"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="3"
            value={form.description}
            onChange={handleInputs}
            placeholder="Product description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Category name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleInputs}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="http://example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg shadow transition"
        >
          Update Product
        </button>
      </form>
    </div>
  )
}

export default Editproduct