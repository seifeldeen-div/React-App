import { Link } from "react-router-dom"
import Image from "../imgs/img1.png"
import "../Style/Product.css"
import ProductDetails from "./ProductDetails"

function Product(props) {
    return (
        <>
            <div className="card" >
                <img src={props.product.image} className="card-img-top overflow-hidden" alt="productImage" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <Link to={`/products/${props.product.id}`} className="btn btn-primary">More Details</Link>
                </div>
            </div>
        </>
    )
}

export default Product