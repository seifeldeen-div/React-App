import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EditProduct() {

    const { productEditID } = useParams()
    const [product, getProduct] = useState({})
    const [title, editTitle] = useState("")
    const [price, editPrice] = useState(0)

    useEffect(() => {
        getEditedProduct()
    }, [])

    const getEditedProduct = () => {
        fetch(`http://localhost:9000/products/${productEditID}`)
            .then(res => res.json())
            .then(data => {
                getProduct(data)
                editPrice(data.price)
                editTitle(data.title)
            })
    }


    return (
        <>
            <h1>Edit Product #{productEditID}</h1>


            <form onSubmit={(e) => {
                e.preventDefault()
                fetch(`http://localhost:9000/products/${productEditID}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title,
                        price
                    })
                }).then(() => {
                    alert("Done -- Product Edited")
                    getEditedProduct()
                })
            }}>
                <div className="image">
                    <img src={product.image} alt="productImage" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Title</label>
                    <input value={title} onChange={(e) => {
                        editTitle(e.target.value)
                    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input value={price} onChange={(e) => {
                        editPrice(Number(e.target.value))
                    }} type="text" className="form-control" id="exampleInputPassword1" placeholder="Edit Price" />
                </div>
                <div className="des">
                    <textarea name="textarea" value={product.description}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-info">Update</button>
            </form >
        </>
    )
}

export default EditProduct