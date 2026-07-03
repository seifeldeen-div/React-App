import Product from "./Product"
import "../Style/ProductList.css"
import { useEffect, useState } from "react"

function ProductList() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="cards">
                <div className="container">
                    {products.map((product)=> {
                        return(
                            <>
                            <Product key={product.id} product={product} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductList