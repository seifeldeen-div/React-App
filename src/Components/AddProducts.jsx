import "../Style/AddProduct.css"

function AddProducts() {
    return (
        <>
            <h1>Add new Product</h1>

            <form onSubmit={(event)=> [
                event.preventDefault()
            ]}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPrice" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputPrice" />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
}

export default AddProducts