import { createContext, useEffect, useState } from "react"

export const ProductsContext = createContext([])

function ProductsProvider(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                console.log(data)
                console.log("Seif")
            })
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider