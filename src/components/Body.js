import { swiggy_api_URL } from "../config";
import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shrimer from "./Shrimer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getAllResturants = async () => {
    try {
      const response = await fetch(swiggy_api_URL);
      const data = await response.json();
      async function verifyData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          const check =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (check !== undefined) return check;
        }
      }
      const verifiedData = await verifyData(data);
      setAllRestaurants(verifiedData);
      setFilterRestaurant(verifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  const serachData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filterrestaurant = filterData(searchText, restaurants);
      setFilterRestaurant(filterrestaurant);
      setErrorMsg("");
      if (filterrestaurant?.length === 0) {
        setErrorMsg("No Restaurant is Aviable with the Given Name");
      }
    } else {
      setErrorMsg("");
      setFilterRestaurant(restaurants);
    }
  };

  useEffect(() => {
    getAllResturants();
  }, []);

  if (!allRestaurants) return null;

  return (
    <>
      {console.log("rendered")}
      <div className="search-restaurants-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="serach-button"
          onClick={() => {
            serachData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      {errorMsg && <div className="error-container">{errorMsg}</div>}

      {allRestaurants?.length === 0 ? (
        <Shrimer />
      ) : (
        <div className="restaurant-list">
          {filterRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
