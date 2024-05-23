// import { useEffect, useState } from "react";
// import Shimmer from "./ShimmerUI";


// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=323532"
//     );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//   };
//   if (resInfo == null) {
//     return <Shimmer />;
//   }

//   const { name, cuisines, avgRating, sla } =
//     resInfo?.cards[2]?.card?.card?.info;
  
  

//   return(
//     <div className="menu-container">
//     <h1>{name}</h1>
//     <h3>{cuisines.join(", ")}</h3>
//     <h3>{avgRating}</h3>
//     <h3>{sla.deliveryTime}</h3>
    
   
//   </div>
//   )

  
// };
// export default RestaurantMenu;

import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/contants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;