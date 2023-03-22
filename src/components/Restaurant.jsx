import { BsFillStarFill } from "react-icons/bs";
import "../css/Restaurant.css";
import { RestaurantPromotion } from "./RestaurantPromotion";
import { RestaurantTag } from "./RestaurantTag";

export function Restaurant({ restaurant }) {
  return (
    <div className="restaurant">
      <div
        className="cover-img"
        style={{
          backgroundImage: `url(${restaurant.imageUrl})`,
        }}></div>
      <div className="description">
        <div className="res-name">{restaurant.restaurant}</div>
        <div className="res-info">
          <RestaurantTag>
            <div className="res-rating">
              <BsFillStarFill /> {restaurant.rating.toFixed(1)}
            </div>
          </RestaurantTag>
          <RestaurantTag>
            {restaurant.minCookTime}-{restaurant.maxCookTime} min
          </RestaurantTag>
          {restaurant.isNew && (
            <RestaurantTag>
              <span className="new-restaurant">New</span>
            </RestaurantTag>
          )}
        </div>
      </div>
      {restaurant.promotion && (
        <div className="promotion">
          <RestaurantPromotion promotion={restaurant.promotion} />
        </div>
      )}
    </div>
  );
}
