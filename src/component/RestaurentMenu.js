
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const[showIndex, setShowIndex] = useState(false)
  const resInfo = useRestaurentMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl mt-6 mb-2">{name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* here we build categories accordian */}
      {categories.map((category, index)=>(
      <RestaurentCategory
      key={category?.card?.card.title}
      data={category?.card?.card}
      showItems={index===showIndex? true:false}
      setShowIndex={()=>setShowIndex(index)}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;