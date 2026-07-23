import { useContext } from "react"
import { ProductsContext } from "../Context/ProductsContext"

function Context(props) {

    const products = useContext(ProductsContext)

    return (
        <>
            <h1>Welcome Context length: {products.length} </h1>
            <br />
            <div className="container">
                {products.map((product) => {
                    return <h2>{product.title}</h2>
                })}
            </div>
        </>
    )
}

export default Context