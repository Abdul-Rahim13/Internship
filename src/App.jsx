import './App.css'
import { Routes, Route } from "react-router-dom"
import Api from './components/fetchapi/Api'
import ProductDetails from './components/fetchapi/ProductDetails'
import Editproduct from './components/fetchapi/Editproduct'
import Newproduct from './components/fetchapi/Newproduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Api />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/new" element={<Newproduct />} />
      <Route path="/products/:id/edit" element={<Editproduct />} />
    </Routes>
  )
}

export default App;
