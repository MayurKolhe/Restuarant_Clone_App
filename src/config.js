import React from "react";
import data from "../data.json";

export const list = data.Data.storeList.data.stores;

export const DisplayResturant = ({
  headerImgUrl,
  name,
  description,
  averageRating,
  numRatingsDisplayString,
}) => {
  return (
    <div className="card">
      <img src={headerImgUrl} />
      <h2>{name}</h2>
      <h4>{description}</h4>
      <span>
        <h4>
          <i class="fa-solid fa-star"></i>
          {averageRating}
        </h4>
        <h4>{numRatingsDisplayString}</h4>
      </span>
    </div>
  );
};
