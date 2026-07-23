import { Link } from "react-router-dom"
import "../Style/SideBar.css"

function SideBar() {
    return (
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to="/">Main Content</Link>
                </li>
                <li>
                    <Link to="products">Get all Products</Link>
                </li>
                <li>
                    <Link to="/#">Get all Categories</Link>
                </li>
                <li>
                    <Link to="context">Try Context</Link>
                </li>
            </ul>
        </>
    )
}

export default SideBar