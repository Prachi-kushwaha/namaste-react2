// import React from "react"
import { useContext } from "react"
import {IMAGE_URL} from "../utils/contants"
import UserContext from "../utils/UserContext"

const RestroCard = (props)=>{
    const {resData } = props

    const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser)
    

    const {cloudinaryImageId , name, cuisines, costForTwo,sla, avgRating} = resData?.info || {}
    // const deliveryTime = resData?.info?.sla?.deliveryTime|| 'N/A';
    
    return (
      <div className="m-4 p-4 w-[300px] rounded-md" style={{backgroundColor: "#DFDFE4"}} >
        <div className="">
            <img 
            className="w-[260px] h-[230px] rounded-md "
            // alt="res-logo" 
            src={IMAGE_URL + cloudinaryImageId }
            />
           <h4 className="font-bold">{name}</h4>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{avgRating} stars</h4>
           <h4>{sla.slaString}</h4>
           <h4>{loggedInUser}</h4>
        </div>
        </div>
    )
}
export default RestroCard