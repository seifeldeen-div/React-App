import { useParams } from "react-router-dom"

function EditProduct() {

    const { productID } = useParams()
    return (
        <>
            <h1>Edit Product #{productID}</h1>
        </>
    )
}

export default EditProduct