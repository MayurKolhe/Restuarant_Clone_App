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

    const verifiedMenuItems =
    RestaurantData?.data?.cards
        ?.find((res) => res.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];
    const uniqueMenuItems = [];
    verifiedMenuItems.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return { restaurant, menuItems };
};

export default useGetRestaurantMenu;
