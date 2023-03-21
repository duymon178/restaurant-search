import "../css/RestaurantList.css";
import { Restaurant } from "./Restaurant";

export function RestaurantList({ searchTerm, category }) {
  return (
    <>
      <div className="res-list">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
      <div className="show-more">
        <button>+ Show More</button>
      </div>
    </>
  );
}
