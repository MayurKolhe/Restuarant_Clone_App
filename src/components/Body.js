import React, { useState } from "react";
import { list, DisplayResturant } from "../config";

const filertData = (searchText, listData) => {
  const filteredList = listData.filter((restaurant) =>
    restaurant?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredList;
};

const Body = () => {
  const [searchText, SetSearchText] = useState("");
  const [listData, setListData] = useState(list);
  return (
    <>
      <div className="search-restaurants">
        <input
          type="text"
          placeholder="Restaurants"
          className="search"
          value={searchText}
          onChange={(e) => SetSearchText(e.target.value)}
        />
        <button
          className="serach-button"
          onClick={() => {
            const data = filertData(searchText, listData);
            setListData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {listData.map((restaurant) => {
          return <DisplayResturant key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </>
  );
};

export default Body;
