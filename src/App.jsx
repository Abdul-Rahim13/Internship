import './App.css'
import { AppProvider } from './components/contextapiform/ContextApiForm'
import FormCAPI from './components/contextapiform/FormCAPI'
import CreateSLiceProegct from './components/redux/CreateSLiceProegct'
import Redux from './components/redux/Redux'
import reduxasyncthunk from './components/redux/reduxasyncthunk'

function App() {
  return (
    <>
    <Redux/>
    <CreateSLiceProegct/>
    <reduxasyncthunk/>
    </>
  )
}

export default App;
