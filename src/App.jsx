import './App.css'
import { Routes, Route } from "react-router-dom"
import { AppProvider } from './components/contextapiform/ContextApiForm'
import FormCAPI from './components/contextapiform/FormCAPI'
import CreateSLiceProegct from './components/redux/CreateSLiceProegct'
import Redux from './components/redux/Redux'
import Reduxasyncthunk from './components/redux/Reduxasyncthunk'
import Form from './components/reduxform/form'
import Api from './components/fetchapi/Api'
import ProductDetails from './components/fetchapi/ProductDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Api />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App;
