import "./App.css"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import About from "./Components/About"
import ProductListg from "./Components/ProductLisyt"
import ProductDetails from "./Components/ProductDetails"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
          </>
        } />
        <Route path="about" element={<About />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="products" element={<ProductListg />} />
      </Routes>
    </>
  )
}

export default App