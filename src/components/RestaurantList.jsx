import { useEffect, useState } from "react";
import "../css/RestaurantList.css";
import { Restaurant } from "./Restaurant";

const ITEMS_OFFSET = 9;

export function RestaurantList({ searchTerm, category }) {
  const [restaurants, setRestaurants] = useState([]);
  const [lastIndex, setLastIndex] = useState(ITEMS_OFFSET);

  useEffect(() => {
    async function fetchRestaurants() {
      const res = await fetch(
        "https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb"
      );

      if (res.ok) {
        const data = await res.json();
        setRestaurants(data);
      }
    }

    fetchRestaurants();
  }, []);

  useEffect(() => {
    setLastIndex(ITEMS_OFFSET);
  }, [searchTerm, category]);

  function handleShowMore() {
    setLastIndex(lastIndex + ITEMS_OFFSET);
  }

  function filter(array, category, searchTerm) {
    if (category !== "0" && searchTerm === "") {
      return array.filter((a) => a.categoryId === category);
    } else if (category === "0" && searchTerm.length > 0) {
      return array.filter((a) =>
        a.restaurant.toLowerCase().includes(searchTerm)
      );
    } else if (category !== "0" && searchTerm.length > 0) {
      return array.filter(
        (a) =>
          a.categoryId === category &&
          a.restaurant.toLowerCase().includes(searchTerm)
      );
    }

    return array;
  }

  const filteredRestaurants = filter(restaurants, category, searchTerm);

  const slicedRestaurants = filteredRestaurants.slice(0, lastIndex);

  const displayShowMore =
    filteredRestaurants.length > 9 && lastIndex < filteredRestaurants.length;

  return (
    <>
      <div className="res-list">
        {slicedRestaurants.map((r) => (
          <Restaurant key={r.id} restaurant={r} />
        ))}
      </div>
      <div className="show-more">
        {displayShowMore && (
          <button onClick={handleShowMore}>+ Show More</button>
        )}
      </div>
    </>
  );
}
