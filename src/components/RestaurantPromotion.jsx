import { BsGiftFill } from "react-icons/bs";
import "../css/RestaurantPromotion.css";

export function RestaurantPromotion({ promotion }) {
  return (
    <div
      className="res-promotion"
      style={{
        backgroundColor:
          promotion === "1+1"
            ? "#8f64ff"
            : promotion === "gift"
            ? "#00b1ff"
            : "#ff696f",
      }}>
      <div>
        {promotion === "1+1" ? (
          "1+1"
        ) : promotion === "gift" ? (
          <BsGiftFill />
        ) : (
          "%"
        )}
      </div>
    </div>
  );
}
