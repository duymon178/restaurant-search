import { BsFillStarFill } from "react-icons/bs";
import "../css/Restaurant.css";
import { RestaurantPromotion } from "./RestaurantPromotion";
import { RestaurantTag } from "./RestaurantTag";

export function Restaurant() {
  return (
    <div className="restaurant">
      <div
        className="cover-img"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/400x400?Pizza)`,
        }}></div>
      <div className="description">
        <div className="res-name">Domino's pizza</div>
        <div className="res-info">
          <RestaurantTag>
            <div className="res-rating">
              <BsFillStarFill /> 4.7
            </div>
          </RestaurantTag>
          <RestaurantTag>50-70 min</RestaurantTag>
        </div>
      </div>
      <div className="promotion">
        <RestaurantPromotion />
      </div>
    </div>
  );
}
