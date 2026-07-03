import Product from "./Product"
import "../Style/ProductList.css"
import { useEffect, useState } from "react"

function ProductList() {
    let [products, setProducts] = useState([])
    let [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setFilterProducts(data)
            });
    }, [])

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="btns">
                <button onClick={() => {
                    setFilterProducts(
                        products.filter((product) => product.price > 100)
                    )
                }} className="btn btn-info">Grater than 100</button>
                <button onClick={() => {
                    setFilterProducts(
                        products.filter((product) => product.price < 100)
                    )
                }} className="btn btn-info">Less than 100</button>
                <button onClick={() => {
                    setFilterProducts(products)
                }} className="btn btn-info">All Products</button>
            </div>
            <div className="cards">
                <div className="container">
                    {filterProducts.map((product) => {
                        return (
                            <>
                                <Product key={product.id}
                                    product={product}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductList