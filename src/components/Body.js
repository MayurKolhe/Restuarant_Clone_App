import RestaurantCard, { withDiscountTag } from "./Restaurant";
import Shrimer from "./Shrimer";
import { Link } from "react-router-dom";
import useGetAllRestaurants from "../hooks/useGetAllRestaurants";
import useSearchRestaurant from "../hooks/useSearchRestaurant";
import useOnline from "../hooks/useOnline";
import UserOffline from "./UserOffline";
const Body = () => {
  const allRestaurants = useGetAllRestaurants();
  const {
    searchText,
    setSearchText,
    filterRestaurant,
    errorMsg,
    handleSearch,
  } = useSearchRestaurant(allRestaurants);

  const RestaurantCardDiscount = withDiscountTag(RestaurantCard);
  const isOnline = useOnline();

  if (!isOnline) {
    return <UserOffline />;
  }

  if (!allRestaurants) return null;

  const verifyDiscount = (discount) => {
    if (discount !== null && discount !== undefined && discount !== "ITEMS") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {console.log("rendered")}
      <div className="flex justify-center">
        <input
          type="text"
          className="md:w-96 m-1 p-2 border-4 border-black focus-within:placeholder:text-gray-500 text-black rounded-md"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="m-2 border-black hover:bg-slate-800 hover:text-white bg-slate-200 p-1 rounded-md border-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {errorMsg && <div className="text-red-400 text-lg">{errorMsg}</div>}
      {filterRestaurant?.length === 0 ? (
        <Shrimer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filterRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {verifyDiscount(
                  restaurant?.info?.aggregatedDiscountInfoV3?.header
                ) ? (
                  <RestaurantCardDiscount restaurantData={restaurant?.info} />
                ) : (
                  <RestaurantCard restaurantData={restaurant?.info} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
