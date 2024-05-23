import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import resList from "./utils/mock_data";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
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

    setListOfRestraunt(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurent(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        
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
