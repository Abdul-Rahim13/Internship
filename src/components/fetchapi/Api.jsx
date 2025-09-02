import axios from "axios"
import { useEffect, useState } from "react"

function Api() {
    const [data, setData] = useState([])
    const API = 'https://fakestoreapi.com/products'
    // Handle HTTP req and responses
     const fectData = async () => {
        try {
            const res = await axios.get(API)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fectData()
    },[])

  return (
    <div className="grid grid-cols-4 gap-25 mt-5 ml-5 mr-5">
        {
            data.map((item) => (
                <li key={item.id} className="list-none border p-2 rounded shadow">
                    <h1 className="font-bold text-sm mb-2">{item.title}</h1>
                    <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mx-auto"/>
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <p className="text-xs text-gray-600">{item.description}</p>
                </li>
            ))
        }
    </div>
  )
}

export default Api