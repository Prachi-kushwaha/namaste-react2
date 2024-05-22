import { useState } from "react"

const Header =()=>{

    const[btnName, setBtnName] = useState("login")

    return (
    <div className="header">
        <div id="logo">
            <h1>swiggy</h1>
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <button onClick={()=>{btnName==="login"?setBtnName("logout"):setBtnName("login")}}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
}
export default Header