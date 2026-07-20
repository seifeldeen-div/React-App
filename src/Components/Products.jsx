import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        fetch("http://localhost:9000/products", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: 'Are You Sure To Delete',
            showCancelButton: true
        })
            .then((data) => {
                if (data.isConfirmed) {
                    fetch(`http://localhost:9000/products/${product.id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(() => {
                            console.log("Deleted")
                            getAllProducts()
                        })
                }
            })
    }

    return (
        <>
            <h1>All Products</h1>

            <Link className="btn btn-success m-3" to={"add"}>Add New Product</Link>

            {/* adding all prodeucts */}

            <table class="table table-striped">
                <thead>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th></th>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link onClick={() => {
                                            deleteProduct(product)
                                        }} className="btn btn-danger m-2">Delete</Link>
                                        <Link to={product.id} className="btn btn-info">View</Link>
                                        <Link to={`edit/${product.id}`} className="btn btn-primary m-2">Edit</Link>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Products