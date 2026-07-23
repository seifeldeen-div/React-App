import "./App.css"
import Context from "./Components/Trial"
import ProductsProvider from "./Context/ProductsContext"

function App() {
  return (
    <ProductsProvider>
      <Context />
    </ProductsProvider>
  )
}

export default App