import React, { useState } from 'react'

function Newproduct() {

    const [form, setformData] = useState({
        id: 0,
        title: '',
        price: 0.00,
        description: '',
        category: '',
        image: '',
    })

    const handleInputs = (e)=>{
        const name = e.target.name
        const value = e.target.value
        if(name === "id" && name === "price"){
            if(/^[0-9]+$/.test(value)){
            setformData({...form, [name]:value})
        }}else{
            setformData({...form, [name]:value})
        }
    }

  return (
     <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
      <form
        // onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>

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
            placeholder="Product description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="http://example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg shadow transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  )
}

export default Newproduct