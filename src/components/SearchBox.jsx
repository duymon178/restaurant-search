import "../css/SearchBox.css";
import { BsSearch } from "react-icons/bs";

export function SearchBox() {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter restaurant name..."
        className="search-box"
      />
      <BsSearch className="search-icon" />
    </div>
  );
}
