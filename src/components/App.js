import './../styles/App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Women from './components/Women'
import Home from './components/home'

function App() {

  return (
    <>
    <div>
      <Link to={'/home'}>Home</Link><br />
      <Link to={'/women'}>Women</Link>
    </div>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/women/*' element={<Women />}/>
      </Routes>
    </>
  )
}

export default App
