import './App.css'
import { AppProvider } from './components/contextapiform/ContextApiForm'
import FormCAPI from './components/contextapiform/FormCAPI'

function App() {
  return (
    <AppProvider>
      <FormCAPI />
    </AppProvider>
  )
}

export default App;
