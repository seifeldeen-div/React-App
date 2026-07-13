import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../Style/Products.css"
import Swal from "sweetalert2"

function Products() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])


    const getAllProducts = () => {
        fetch("http://localhost:9000/products")
            .then(res => res.json())
            .then(data => {
                // console.table(data)
                setProducts(data)
            })
    }


    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are you sure to delete ${product.title} ?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(() => {
                        getAllProducts()
                        return true
                    })
            }
        })
        return false
    }

    return (
        <>
            <h1>Products</h1>
            <Link to={"add"} className="btn btn-success mt-4">Add new Prdouct</Link>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => {
                                        if (deleteProduct(product))
                                            console.log(`Product ${product.id} Deleted Sucessfully`)
                                    }} className="btn btn-danger btn-sm">Delete</button>
                                    <Link to={`product/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
        </>
    )
}

export default Products