import { useEffect, useState } from "react";
import { searchData } from "../utility/helper";

const useSearchRestaurant = (allRestaurants) => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(allRestaurants);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = () => {
    if (searchText === "") {
      setErrorMsg("");
      setFilterRestaurant(allRestaurants);
    } else {
      const searchResults = searchData(searchText, allRestaurants);
      if (searchResults.length === 0) {
        setErrorMsg("No Restaurant is Available with the Given Name");
      }
      setFilterRestaurant(searchResults);
    }
  };

  useEffect(() => {
    setFilterRestaurant(allRestaurants);
  }, [allRestaurants]);

  return {
    searchText,
    setSearchText,
    filterRestaurant,
    errorMsg,
    handleSearch,
  };
};

export default useSearchRestaurant;
