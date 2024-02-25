import { shimmer_card_unit, shimmer_menu_card_unit } from "../config";


const CardShrimer = () => {
    return (
      <div className="p-4 m-3 w-52 h-80 bg-slate-100 shadow-lg on hover:bg-orange-300 on">
      <div className="shimmer-img stroke animate border-2 border-black p-1 on hover:border-blue-200"></div> {/* Restaurant image */}
      <div className="shimmer-title stroke animate flex flex-wrap text-black font-bold"></div> {/* Restaurant name */}
      <div className="shimmer-tags stroke animate flex flex-wrap justify-start font-semibold text-xs"></div> {/* Cuisine type */}
      <div className="shimmer-details stroke animate justify-start text-sm font-extrabold"></div> {/* Location or rating */}
      <div className="shimmer-rating stroke animate p-1 m-2 bg-white text-black font-bold"></div> {/* Rating */}
      <div className="shimmer-travel stroke animate p-1 m-2 border-s-4"></div> {/* Last mile travel */}
      <div className="shimmer-cost stroke animate p-2 ml-8 text-pretty font-extrabold text-lg text-blue-500"></div> {/* Cost for two */}
  </div>
    );
};

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate"></div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(shimmer_menu_card_unit)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shrimer = () => {
    return (
        <div className="flex flex-wrap">
            {
                new Array(shimmer_card_unit).fill(0).map((element, index) => {
                    return <CardShrimer key={index} />;
                })
            }
        </div>
    );
};