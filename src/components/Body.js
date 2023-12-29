import React, { useState } from "react";
import { list, DisplayResturant } from "../config";

const FileteredData = (searchText, restaurants) => {
  const filteredResturants = restaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchText.toLowerCase())
    );
  })

  return filteredResturants;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(list);

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
    const data = FileteredData(newSearchText, list);
    setRestaurants(data);
  }

  return (
    <>
      <div className="search-restaurants">
        <input
          type="text"
          placeholder="serach for Resturants"
          className="search"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="serach-button"
          onClick={() => {
            const data = FileteredData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <DisplayResturant key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </>
  );
};

export default Body;
