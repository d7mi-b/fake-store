import { useState } from 'react'
import Catagory from './components/Catagory'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Products from './components/Products'
import Trusted from './components/Trusted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catagory />
      <Features />
      <Products category='jewelery' />
      <Products category="women's clothing" />
      <Trusted />
      <Products category="men's clothing" />
      <Products category='electronics' />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
