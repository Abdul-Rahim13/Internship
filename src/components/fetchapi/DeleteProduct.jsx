import { useState } from 'react'
import { useParams } from 'react-router-dom'

function DeleteProduct() {
    const {id} = useParams()
    const [newData, setnewData] = useState([])
    const DeleteProduct = async () => {
        try {
            const res = await axios.del(`https://fakestoreapi.com/products/${id}`)
            setnewData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div></div>
  )
}

export default DeleteProduct