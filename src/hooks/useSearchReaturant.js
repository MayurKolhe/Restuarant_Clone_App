import { useEffect, useState } from "react";
import { serachData } from "../utility/helper";

const useSearchReaturant = (allRestaurants) => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(allRestaurants);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = () => {
    if (searchText === "") {
      setErrorMsg("");
      setFilterRestaurant(allRestaurants);
    } else {
      const searchResults = serachData(searchText, allRestaurants);
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

export default useSearchReaturant;
