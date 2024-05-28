import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560"
    );
    const jsondata = await data.json();

    setListOfRestaurents(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurent(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

  };

  const onLineStatus = useOnlineStatus()
  if(onLineStatus==false){
    return(
      <h1>It looks like you are offline, please check your internet connection</h1>
    )
   
  }
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div className="flex m-4 p-4 gap-10">
        <div className="flex w-60 h-7 bg-green-100 border border-solid border-black rounded-md">
          <input
            type="text"
            className=" "
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
          />
          <button
            className="border w-20  border-l-black "
            onClick={() => {
              console.log(searchText);
              const filterRestaurent = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filterRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-100 w-56 h-7 border border-solid border-black rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        
        {filteredRestaurent.map((restaurant) => (
           <Link className="h4"
           key={restaurant.info.id}
           to={"/restaurants/" + restaurant.info.id}
         >
           <RestroCard resData={restaurant} />
         </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Body;
