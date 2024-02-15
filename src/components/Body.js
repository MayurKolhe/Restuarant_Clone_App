import RestaurantCard from "./Restaurant";
import Shrimer from "./Shrimer";
import { Link } from "react-router-dom";
import useGetAllResturants from "../hooks/useGetAllResturants";
import useSearchReaturant from "../hooks/useSearchReaturant";
import useOnline from "../hooks/useOnline";
import UserOffline from "./UserOffline";
const Body = () => {
  const allRestaurants = useGetAllResturants();
  const {
    searchText,
    setSearchText,
    filterRestaurant,
    errorMsg,
    handleSearch,
  } = useSearchReaturant(allRestaurants);
  const isOnline = useOnline();
  
  if (!isOnline) {
    return <UserOffline />;
  }

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
        <button className="serach-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {errorMsg && <div className="error-container">{errorMsg}</div>}

      {filterRestaurant?.length === 0 ? (
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
