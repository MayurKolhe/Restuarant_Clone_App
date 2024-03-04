import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../config";
import { useEffect, useState } from "react";
const useGetRestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const getRestaurantInfo = async () => {
    const response = await fetch(swiggy_menu_api_URL + resId);
    const RestaurantData = await response.json();
    const VerifiedRestaurantData =
      RestaurantData?.data?.cards
        ?.map((rest) => rest.card)
        ?.find((rest) => rest && rest.card["@type"] === RESTAURANT_TYPE_KEY)
        ?.card?.info || null;
    setRestaurant(VerifiedRestaurantData);

    const itemsCards = RestaurantData?.data?.cards.find(
      (rest) => rest && rest.groupedCard
    );

    const {cards} = itemsCards?.groupedCard?.cardGroupMap?.REGULAR;

    const ItemCategory = cards.filter((rest)=> rest.card?.["card"]?.['@type'] === MENU_ITEM_TYPE_KEY)
    
    console.log("🚀 ~ getRestaurantInfo ~ ItemCategory:", ItemCategory)

   
    setMenuItems(ItemCategory);
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return { restaurant, menuItems };
};

export default useGetRestaurantMenu;
