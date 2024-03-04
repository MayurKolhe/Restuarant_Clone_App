import { ITEM_IMG_CDN_URL } from "../config";
import logo from "../../Images/restaurant.jpg";

const ItemList = ({ items }) => {
  const handleAdd = () => {};
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  hover:bg-orange-300 border-gray-400 border-b-2 shadow-lg flex text-left justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>$ - {item.card.info.price}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className=" bg-black text-white rounded-lg p-1" onClick={handleAdd}>Add + </button>
            </div>
            <img
              src={
                item.card.info.imageId
                  ? ITEM_IMG_CDN_URL + item.card.info.imageId
                  : logo
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
