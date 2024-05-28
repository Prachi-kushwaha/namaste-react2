import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
    // console.log("child constructor is called")
        this.state = {
            userInfo:{
              name:"pri",
              location:"Default"
            }
           
        }
    }
   async componentDidMount(){
      const data = await fetch("https://api.github.com/users/Prachi-kushwaha")  
      const json = await data.json()
      this.setState({
        userInfo : json
      })
    }

    render(){
        // console.log(this.props.name + "child render")

        const{name, location, avatar_url} = this.state.userInfo
        
        return(
            <>
        <div className="about-container">
        <img src={avatar_url}/>
        <h3>{name}</h3>
        <h3>{location}</h3>
        
        </div>
        </>
        )
    }
}
export default UserClass;