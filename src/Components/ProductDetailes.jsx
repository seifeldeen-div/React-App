import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../Style/ProductDetailes.css"

function ProductDetailes() {

    const { productID } = useParams()
    const [product, assignProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productID}`)
            .then(res => res.json())
            .then(data => assignProduct(data))
    })


    return (
        <>
            <h1>ProductDetailes -- Product {productID} </h1>
            {/* view products */}

            <div className="card">
                <img src={product.image} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <Link to="#" className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </>
    )
}

export default ProductDetailes