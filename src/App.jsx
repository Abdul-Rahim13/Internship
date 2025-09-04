import './App.css'
import { Routes, Route } from "react-router-dom"
import { AppProvider } from './components/fetchapi/contextApi/ContextAPIform'
import Products from './components/fetchapi/Products'
import ProductsDetails from './components/fetchapi/contextApi/ProductsDetails'
import Newproduct from './components/fetchapi/contextApi/Newproduct'
import Editproduct from './components/fetchapi/contextApi/Editproduct'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/products/new" element={<Newproduct />} />
        <Route path="/products/:id/edit" element={<Editproduct />} />
      </Routes>
    </AppProvider>
  )
}

export default App;
