import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ProductDetails() {
    const location = useLocation()
    const {id} = useParams()
    const [product, setProduct] = useState(location.state || null)
    const [count, setCount] = useState(1)

    const fetchProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!location.state){
            fetchProduct()
        }
    }, [id, location.state])

    const handleInc = () => {
        setCount(count+1)
    }

    const handleDec = () => {
        if (count > 1) {
            setCount(count - 1); 
        }

    }

    if (!product) {
    return <p className="p-4 text-center">Loading product details...</p>;
  }

  return (
   <div className="flex flex-col md:flex-row gap-10 px-8 py-10 bg-gray-50">
    <div className="flex justify-center md:justify-start">
        <img src={product.image} alt={product.title} className="w-60 h-60 object-contain border border-gray-200 rounded-xl shadow"/>
    </div>
        
        <div className="mt-4 md:mt-0">

            <h5 className="item-title font-bold text-3xl text-gray-800">{product.title}</h5>
            <p className="text-yellow-400 mt-1">
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              <FontAwesomeIcon icon={faStar}/>
            </p>

            <div className='flex mt-3 gap-2 items-center'>
                <p className='font-bold'>Availabilty:</p>
                <p className='text-emerald-500 font-bold'>In Stock</p>
            </div>

            <p className="item-price text-blue-600 text-2xl font-bold mt-2">${product.price}.00</p>
            <p className=' text-gray-700 text-justify max-w-xl text-[15px] mt-2'>{product.description}</p>

            <p className='font-semibold mt-4'>Size</p>
            <div className='flex gap-2 mt-2'>
                <div className="border border-gray-300 rounded-lg p-2 flex flex-col font-semibold items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer">XS</div>
                <div className="border border-gray-300 rounded-lg p-2 flex flex-col font-semibold items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer">S</div>
                <div className="border border-gray-300 rounded-lg p-2 flex flex-col font-semibold items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer">M</div>
                <div className="border border-gray-300 rounded-lg p-2 flex flex-col font-semibold items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer">L</div>
            </div>

            <p className='font-semibold mt-4'>Color</p>
            <div className='flex gap-2 mt-2'>
                <div className="border border-gray-300 rounded-lg bg-black flex flex-col items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer"></div>
                <div className="border border-gray-300 rounded-lg bg-blue-600 flex flex-col items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer"></div>
                <div className="border border-gray-300 rounded-lg bg-red-700 flex flex-col items-center w-[40px] h-[40px] hover:border-blue-500 cursor-pointer"></div>
            </div>

            <p className='font-semibold mt-4'>Quantity</p>
            <div className="flex items-center space-x-4 mt-3">
                <button onClick={handleDec} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold">
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <span className="px-4 py-2 border rounded text-center w-10">{count}</span>
                <button onClick={handleInc} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    Add to cart
                </button>
            </div>
        
        </div>
    </div>
  )
}

export default ProductDetails
