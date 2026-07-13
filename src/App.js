import "./App.css"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import SideBar from "./Components/SideBar"
import Products from "./Components/Products"
import Home from "./Components/Home"
import About from "./Components/About"
import AddProducts from "./Components/AddProducts"
import { Routes, Route } from "react-router-dom"
import ProductDetailes from "./Components/ProductDetailes"
import Contact from "./Components/Contact"
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProducts />} />
            <Route path="products/product/:productID" element={<ProductDetailes />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App