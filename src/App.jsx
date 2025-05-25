
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'

import Navbar from './components/Navbar/Navbar'
import Users1 from './pages/users/Users1'




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<  Products />} />
        <Route path='/users' element={<Users1 />} />
      </Routes>
    </>
  )
}

export default App
