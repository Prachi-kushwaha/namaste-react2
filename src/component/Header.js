import { useState } from "react"
import { Link } from "react-router-dom"

const Header =()=>{

    const[btnName, setBtnName] = useState("login")

    return (
    <div className="header">
        <div id="logo">
            <h1>swiggy</h1>
        </div>
        <div id="nav-items">
            <ul>
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="/about">About</Link>
                <Link className="li" to="/contact">Contact-US</Link>
                <button onClick={()=>{btnName==="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
}
export default Header