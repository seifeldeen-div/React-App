import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../Style/ProductDetailes.css"

function ProductDetailes() {

    const { productID } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productID}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [productID])


    return (
        <>
            <h1>Product View product with id #{productID}</h1>

            <div className="card mt-5">
                <img src={product.image} className="card-img-top" alt="product iamge" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="/#" className="btn btn-success">Buy Now</a>
                </div>
            </div>
        </>
    )
}
export default ProductDetailes