import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
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

  return (
    <AppContext.Provider value={{ data, fetchProducts, loading }}>
      {children}
    </AppContext.Provider>
  );
};

