import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [form, setformData] = useState({
    id: '',
    title: '',
    price: 0.00,
    description: '',
    category: '',
    image: '',
  })
  const API = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(API);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProductDetails = async (id) => {
    try {
        setLoading(true)
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(res.data)
    } catch (error) {
        
    }finally{
        setLoading(false)
    }
  }

  const handleInc = () => {
    setCount(count+1)
  }

  const handleDec = () => {
    setCount(count-1)
  }

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

    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://fakestoreapi.com/products', form, {headers: {'Content-Type': 'application/json'}})
            console.log(res.data)
            alert("Product Added Succesfully!")
            setformData({id: '', title: '', price: 0.00, description: '', category: '', image: '',})
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <AppContext.Provider value={{ data, fetchProducts, loading, fetchProductDetails, handleInc, handleDec, count, handleInputs, handleSumbit, form }}>
      {children}
    </AppContext.Provider>
  );
};

