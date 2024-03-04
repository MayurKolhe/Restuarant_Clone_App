import { useState } from "react";
import ItemList from "../components/ItemList";
const RestaurantCategory = ({ data, showItem, setShowItem,setCloseItem }) => {
  handClickOnItem = () => {
    showItem ? setCloseItem():setShowItem();
  };
  return (
    <div className="w-6/12 bg-gray-150 shadow-lg p-4 mx-auto my-5">
      <div className="flex justify-between" onClick={handClickOnItem}>
        <span className="text-black font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        {showItem ? (
          <span className="cursor-pointer">⬆️</span>
        ) : (
          <span className="cursor-pointer">⬇️</span>
        )}
      </div>
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
