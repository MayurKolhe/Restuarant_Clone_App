import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../config";
import {verifyData } from "../utility/helper";

const useGetAllResturants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const getAllResturants = async () => {
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
    getAllResturants();
  }, []);

  return allRestaurants;
};

export default useGetAllResturants;
