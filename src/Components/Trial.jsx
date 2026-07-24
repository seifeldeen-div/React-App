import { useContext } from "react"
import { ProductsContext } from "../Context/ProductsContext"

function Context(props) {

    const products = useContext(ProductsContext)

    return (
        <>
            <h1 className="
            text-center rounded-lg border p-2 w-1/2 mx-auto mt-1
            bg-red-400 text-white sm:bg-blue-300 md:bg-purple-400
            text-lg sm:text-2xl md:text-5xl
            ">Welcome Context length: {products.length} </h1>
            <div className="container flex gap-2 flex-wrap">
                <div className="bg-red-400 size-96"></div>
                <div className="bg-green-400 size-96"></div>
                <div className="bg-yellow-400 size-96"></div>
            </div>
            <button className="hover:text-white hover:bg-rose-300 active:bg-red-600
            border-2 border-green-700 ml-5 py-2 px-4 font-medium ">
                Click
            </button>
            <br />
            <div className="container">
                {products.map((product) => {
                    return (<>
                        <ul>
                            <li>{product.title}</li>
                        </ul>
                    </>)
                })}
            </div>
        </>
    )
}

export default Context