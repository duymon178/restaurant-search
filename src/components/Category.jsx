import "../css/Category.css";

export function Category() {
  return (
    <ul className="category">
      <li className="category-item selected">
        <button>All</button>
      </li>
      <li className="category-item">
        <button>Sushi</button>
      </li>
      <li className="category-item">
        <button>Pizza</button>
      </li>
      <li className="category-item">
        <button>Burgers</button>
      </li>
      <li className="category-item">
        <button>Hot Meals</button>
      </li>
      <li className="category-item">
        <button>Desserts</button>
      </li>
      <li className="category-item">
        <button>Drinks</button>
      </li>
    </ul>
  );
}
