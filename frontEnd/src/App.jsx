import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Products from './pages/products/Products'
import ContactPage from './pages/contact/ContactPage'
import './app.scss'












const App = () => {
  return (


    <div className="app">

      <Navbar />
      <div className="routes">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      </div>
      <Footer />
    </div>


  )
}

export default App




