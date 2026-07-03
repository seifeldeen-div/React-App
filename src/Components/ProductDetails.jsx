import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
    const URL = "https://fakestoreapi.com/products/"
    const [product, setProduct] = useState([])
    const { productId } = useParams()
    console.log(productId)
    useEffect(() => {
        fetch(`${URL}${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                console.log(data)
            })
    }, [productId])

    return (
        <>
            <h1>
                {product.title}
            </h1>
            <p>
                {product.description}
            </p>
            <img src={product.image} alt={product.title} />
            <p>
                {product.price}
            </p>
        </>
    )
}

export default ProductDetails