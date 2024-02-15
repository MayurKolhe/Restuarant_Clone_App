export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
export async function verifyData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    const check =
      jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (check !== undefined) return check;
  }
}

export const serachData = (searchText, restaurants) => {
  if (searchText !== "") {
    const filterrestaurant = filterData(searchText, restaurants);
    return filterrestaurant;
  } else {
    return restaurants;
  }
};
