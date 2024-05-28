import { useState } from "react"

const User = ({name,location})=>{
    const[count] = useState(0)
    const[count2] = useState(1)
    return(
        <>
        <div className="about-container">
            <h1>count : {count}</h1>
            <h1>count : {count2}</h1>
            
        <h3>{name}</h3>
        <h3>pune, {location}</h3>
        <h3>xyz@gmail.com</h3>
        </div>
        </>
    )
}
export default User