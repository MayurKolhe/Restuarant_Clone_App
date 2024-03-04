import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from "../config";
import { MenuShimmer } from "./Shrimer";
import RestaurantCategory from "../components/RestaurantCategory";
import useGetRestaurantMenu from "../hooks/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurant, menuItems } = useGetRestaurantMenu();
  const [showItemIndex , setShowItemIndex] = useState(false);
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="text-center">
      <div className=" grid justify-center">
        <img
          className=" justify-center border-4 border-slate-400"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />

        <h2 className="text-2xl font-bold from-neutral-600">
          {restaurant?.name}
        </h2>
        <p className="p-1 flex flex-wrap justify-center text-pretty text-base font-medium">
          {restaurant?.cuisines?.join(", ")}
        </p>
        <span className=" bg-yellow-300 border-2 p-1 m-1 text-black font-bold text-base">
          ★{restaurant?.avgRating}
        </span>
      </div>
      {menuItems.map((category , index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index === showItemIndex ? true:false}
          setShowItem={()=>setShowItemIndex(index)}
          setCloseItem={()=>setShowItemIndex(prev => !prev)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
