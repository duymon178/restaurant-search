import "../css/CategoryItem.css";

export function CategoryItem({ name, id, setCategory, selectedId }) {
  return (
    <li className={`category-item ${selectedId === id && "selected"}`}>
      <button onClick={() => setCategory(id)}>{name}</button>
    </li>
  );
}
