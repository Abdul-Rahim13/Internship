import './App.css'
import { Routes, Route } from "react-router-dom"
import Products from './components/fetchapi/Products'
import ProductDetails from './components/fetchapi/ProductDetails'
import Editproduct from './components/fetchapi/Editproduct'
import Newproduct from './components/fetchapi/Newproduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/new" element={<Newproduct />} />
      <Route path="/products/:id/edit" element={<Editproduct />} />
    </Routes>
  )
}

export default App;
