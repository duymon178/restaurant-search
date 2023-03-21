import { useEffect, useState } from "react";
import "../css/Category.css";
import { CategoryItem } from "./CategoryItem";

export function Category({ category, setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      const res = await fetch(
        "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
      );

      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    }

    fetchCategory();
  }, []);

  return (
    <ul className="category">
      <CategoryItem
        name="All"
        id="0"
        selectedId={category}
        setCategory={setCategory}
      />
      {categories.map((c) => (
        <CategoryItem
          key={c.id}
          name={c.name}
          id={c.id}
          selectedId={category}
          setCategory={setCategory}
        />
      ))}
    </ul>
  );
}
