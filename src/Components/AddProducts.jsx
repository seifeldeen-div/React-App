import { useState } from "react"
import "../Style/AddProduct.css"

function AddProducts() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)

    return (
        <>
            <h1>AddProducts</h1>

            <form onSubmit={(e) => {
                e.preventDefault()
                fetch("http://localhost:9000/products", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title,
                        price
                    })
                }).then(res => res.json())
                    .then(data => console.log(data))
                    .then(() => {
                        alert("New Product added")
                        setTitle("")
                        setPrice(0)
                    })
            }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Title</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Title" value={title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input onChange={(e) => {
                        setPrice(Number(e.target.value))
                    }} type="text" className="form-control" id="exampleInputPassword1" placeholder="Add Price" value={price} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}
export default AddProducts