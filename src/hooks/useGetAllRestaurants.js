import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../config";
import {verifyData } from "../utility/helper";

const useGetAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const getAllRestaurants = async () => {
    try {
      const response = await fetch(swiggy_api_URL);
      const data = await response.json();
      const verifiedData = await verifyData(data);
      setAllRestaurants(verifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return allRestaurants;
};

export default useGetAllRestaurants;
