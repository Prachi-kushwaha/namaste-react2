import { Component } from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"


class About extends Component{
    constructor(props){
    super(props)
    console.log("parent constructor called")
    }

    componentDidMount(){
        console.log(" parent componenet did mount called")
    }


render(){
    console.log("parent render is called")
    return( <>
    <div>
        <h1>Hello about</h1>
        <h2>Hello pri</h2>
        <h3>loggedInUser : 
           <UserContext.Consumer>
             {({loggedInUser})=>(
                <h1>{loggedInUser}</h1>
                )}
           </UserContext.Consumer>
        </h3>
        <UserClass name={"RichaKushwaha"} location={"maharastra"}/>
    </div>
    </>)
}
}

// const About = () =>{
//     return <>
//     <div>
//         <h1>Hello about</h1>
//         <h2>Hello pri</h2>
//         <UserClass name={"RichaKushwaha"} location={"maharastra"}/>
//     </div>
//     </>
// }

export default About