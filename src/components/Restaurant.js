import { IMG_CDN_URL } from "../config";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = restaurantData;
  return (
    <div className="p-4 m-4 w-52 h-96 bg-slate-100 shadow-xl hover:bg-orange-300">
      <img
        className="border-2 border-black p-1 on hover:border-blue-200"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="flex flex-wrap text-black font-bold">{name}</h3>
      <h5 className="flex flex-wrap justify-start font-semibold text-xs">
        {cuisines.join(", ")}
      </h5>
      <h5 className="justify-start text-sm font-extrabold">{areaName}</h5>
      <span className="flex flex-wrap justify-between">
        <h4 className="p-1 m-2 bg-white text-black font-bold">
          ★ {avgRatingString}
        </h4>
        <h4 className="p-1 m-2 border-s-4">
          🚶‍♂️{sla?.lastMileTravelString ?? "2.0 km"}
        </h4>
        <h4 className="p-2 ml-8 text-pretty font-extrabold text-lg text-blue-500">
          {costForTwo.replace("₹", "$") ?? "200 for two"}
        </h4>
      </span>
    </div>
  );
};

// Higher Order Component

export const withDiscountTag = (RestaurantCard) => {
  return (props) => {
    const { restaurantData } = props;
    return (
      <div>
        <label className="absolute text-white bg-black rounded-lg text-xs m-2 p-2">
          {restaurantData?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
