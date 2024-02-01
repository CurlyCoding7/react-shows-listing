import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Summary from './components/Summary'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/show/:id' Component={Summary}/>
      </Routes>
    </Router>
  )
}

export default App
