import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import { MenuShimmer } from "./Shrimer";
import useGetRestaurantMenu from "../hooks/useGetRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurant, menuItems } = useGetRestaurantMenu();
  console.log(restaurant, menuItems);
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="p-4 m-4 font-serif">
      <div className="justify-center grid">
        <img
          className="border-4 border-slate-400"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="p-4 grid justify-center">
          <h2 className="text-2xl font-bold from-neutral-600">
            {restaurant?.name}
          </h2>
          <p className="p-1 flex flex-wrap justify-center text-pretty text-base font-medium">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="grid justify-center">
            <div className="p-1 m-2">
              <span className=" bg-yellow-300 border-2 p-1 m-1 text-black font-bold text-base">
                ★{restaurant?.avgRating}
              </span>
            </div>
            <div className="p-1 ml-2 font-semibold text-black font-sans">{restaurant?.sla?.slaString}</div>
            <div className="p-1 font-extrabold text-black font-sans">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="p-2 m-2">
          <div className="grid justify-center font-black font-mono border-4 bg-orange-400">
            <h3 className="p-0">Recommended</h3>
            <p className="ml-4">{menuItems.length} ITEMS</p>
          </div>
          <div className="grid gap-4 p-5">
            {menuItems.map((item) => (
              <div className="p-4" key={item?.id}>
                <div className="grid text-wrap w-32">
                  <h3 className="font-extrabold m-1">{item?.name}</h3>
                  <p className="text-base m-1 font-sans font-black">
                    {item?.defaultPrice > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.defaultPrice / 100)
                      : " "}
                  </p>
                  <p className="text-wrap m-1">{item?.description}</p>
                </div>
                <div className="flex items-center">
                  {item?.imageId && (
                    <img
                      className="border-4 border-orange-400 hover:border-amber-950"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="p-5 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
