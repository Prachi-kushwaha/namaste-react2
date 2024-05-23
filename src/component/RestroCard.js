import {IMAGE_URL} from "./utils/contants"

const RestroCard = (props)=>{
    const {resData } = props
    

    const {cloudinaryImageId , name, cuisines, costForTwo,sla, avgRating} = resData?.info || {}
    // const deliveryTime = resData?.info?.sla?.deliveryTime|| 'N/A';
    
    return (
      <div className="restro-container">
        <div className="restro-card">
            <img 
            className="res-card"
            // alt="res-logo" 
            src={IMAGE_URL + cloudinaryImageId }
            />
           <h4 className="h4">{name}</h4>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{avgRating} stars</h4>
           <h4>{sla.slaString}</h4>
        </div>
        </div>
    )
}
export default RestroCard