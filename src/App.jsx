
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/users'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<  Products />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </>
  )
}

export default App
